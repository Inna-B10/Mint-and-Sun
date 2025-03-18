'use client'
import { useState } from 'react'
import styles from './SubscribeButton1.module.scss'

export default function SubscribeButton1({ children }) {
	const handleClick = () => {
		if (clicked) return // Предотвращаем многократные клики
		// alert('Ты нажал на кнопку!')
		setClicked(true)

		setTimeout(() => {
			setDone(true)
		}, 3000) // Время для появления галочки

		setTimeout(() => {
			setDone(false)
			setClicked(false)
		}, 10000) // Время возврата текста кнопки
	}

	const [clicked, setClicked] = useState(false)
	const [done, setDone] = useState(false)

	return (
		<button
			onClick={handleClick}
			// className={styles.subscribeButton}
			className={`${styles.content} ${clicked ? styles.clicked : ''} ${done ? styles.done : ''}`}>
			{done ? (
				<svg className={styles.checkmark} viewBox='0 0 50 50'>
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
			) : clicked ? (
				<svg className={styles.loader}>
					<circle className={styles.circle1} r='20' cx='25' cy='25'></circle>
				</svg>
			) : (
				<div className={`${styles.subscribeButton}`}>Submit</div>
			)}
		</button>
	)
}
