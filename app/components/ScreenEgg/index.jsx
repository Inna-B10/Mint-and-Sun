'use client'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export default function ScreenEgg({ className, children, type }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true)
		}, 10)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div
			className={cn(
				className,
				styles.screenEgg,
				type === 'right' ? styles.screenEggRight : styles.screenEggLeft,
				mounted ? styles.mounted : styles.preMount
			)}>
			{children}
		</div>
	)
}
