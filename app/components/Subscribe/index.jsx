'use client'
import { BellIcon } from '@sanity/icons'
import cn from 'clsx'
import { useState } from 'react'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'
import SubscribeButton from './SubscribeButton'

export default function Subscribe({ className }) {
	const [isSubscribed, setIsSubscribed] = useState(false)
	const [buttonStatus, setButtonStatus] = useState('idle')

	return (
		<ScreenEgg type='subscribe' icon={BellIcon}>
			<div className={cn(className, styles.subscribe)}>
				{isSubscribed ? (
					<div className={styles.subscribeContent}>
						<p>Thank you for support!</p>
						<button disabled={isSubscribed} className={styles.subscribeButton}>
							Subscribed
						</button>
					</div>
				) : (
					<div className={styles.subscribeContent}>
						<input
							type='email'
							placeholder='Enter your email'
							name='subscribe'
							autoFocus
							disabled={buttonStatus !== 'idle'}
							className={styles.subscribeInput}
						/>
						<SubscribeButton
							setIsSubscribed={setIsSubscribed}
							isSubscribed={isSubscribed}
							setButtonStatus={setButtonStatus}
						/>
					</div>
				)}
			</div>
		</ScreenEgg>
	)
}
