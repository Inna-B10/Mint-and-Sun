'use client'
import cn from 'clsx'
import { useState } from 'react'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'
import SubscribeButton from './SubscribeButton'

export default function Subscribe({ className }) {
	const [showInput, setShowInput] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const handleSubscribe = () => {
		preventDefault()
		setShowInput(true)
	}

	return (
		<ScreenEgg type='right'>
			<div
				className={cn(className, styles.subscribe)}
				// onMouseEnter={() => setIsHovered(true)}
				// onMouseLeave={() => {
				// 	// 	setIsHovered(false)
				// 	setShowInput(false)
				// }}
			>
				{/* {isHovered && */}
				{!showInput ? (
					<div className={styles.subscribeContent}>
						<p>Get updates on new posts</p>
						<button
							className={styles.subscribeButton}
							onClick={() => setShowInput(true)}>
							Subscribe...
						</button>
						{/* <SubscribeButton onClick={() => setShowInput(true)} /> */}
					</div>
				) : (
					<div className={styles.subscribeContent}>
						<input
							type='email'
							placeholder='Enter your email'
							autoFocus
							className={styles.subscribeInput}
						/>
						{/* <button
							className={styles.subscribeButton}
							onClick={() => handleSubscribe}>
							Send
						</button> */}
						<SubscribeButton onClick={() => handleSubscribe} />
					</div>
				)}
				{/* } */}
			</div>
		</ScreenEgg>
	)
}
