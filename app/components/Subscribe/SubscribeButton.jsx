'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './SubscribeButton.module.scss'

export default function SubscribeButton() {
	const [status, setStatus] = useState('idle')
	const [progress, setProgress] = useState(0)

	// Обработчик анимации
	useEffect(() => {
		let interval

		if (status === 'loading') {
			setProgress(0) // сбрасываем прогресс
			interval = setInterval(() => {
				setProgress(prev => {
					if (prev >= 100) {
						clearInterval(interval)
						setTimeout(() => {
							setStatus('success')
							// setTimeout(() => {
							// 	setStatus('idle') // сбрасываем обратно на 'idle'
							// }, 1800)
						}, 1500)
						return 100
					}
					return prev + 4
				})
			}, 40)
		}

		return () => clearInterval(interval)
	}, [status])

	const handleClick = () => {
		if (status === 'idle') {
			setStatus('loading')
		}
	}

	return (
		<button
			className={`${styles.button} ${status !== 'idle' ? styles.circle : styles.buttonIdle} ${
				status === 'success' ? styles.successCircle : ''
			}`}
			onClick={handleClick}
			disabled={status !== 'idle'}>
			{status === 'idle' && 'Send'}

			{status === 'loading' && (
				<svg
					className={styles.svg}
					width='60'
					height='60'
					viewBox='0 0 60 60'
					xmlns='http://www.w3.org/2000/svg'>
					<circle
						className={styles.bgCircle}
						cx='30'
						cy='30'
						r='28'
						stroke='#ddd'
						strokeWidth='4'
						fill='none'
					/>
					<motion.circle
						className={styles.progressCircle}
						cx='30'
						cy='30'
						r='28'
						stroke='#23b997'
						strokeWidth='4'
						fill='none'
						strokeDasharray='176'
						strokeDashoffset={176 - (progress / 100) * 176}
						animate={{
							strokeDashoffset: [176, 0],
						}}
						transition={{ ease: 'linear', duration: 2 }}
					/>
				</svg>
			)}

			{status === 'success' && (
				<AnimatePresence>
					<motion.div
						key='check'
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						transition={{ duration: 0.5 }}>
						<svg className={styles.checkmark} viewBox='0 0 40 40'>
							<g className={styles.checkmark1}>
								<path
									className={styles.line1}
									d='M20.8,36l-4,4c-0.7,0.7-1.7,0.7-2.4,0L0.8,26.4c-0.7-0.7-0.7-1.7,0-2.4l4-4c0.7-0.7,1.7-0.7,2.4,0l13.6,13.6 C21.5,34.3,21.5,35.4,20.8,36z'
								/>
								<path
									className={styles.line2}
									d='M14.5,39.9l-4-4c-0.7-0.7-0.7-1.7,0-2.4L43.4,0.6c0.7-0.7,1.7-0.7,2.4,0l4,4c0.7,0.7,0.7,1.7,0,2.4L16.9,39.9 C16.3,40.6,15.2,40.6,14.5,39.9z'
								/>
							</g>
						</svg>
					</motion.div>
				</AnimatePresence>
			)}
		</button>
	)
}
