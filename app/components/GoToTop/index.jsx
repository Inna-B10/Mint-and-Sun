'use client'
import { ArrowUpIcon } from '@sanity/icons'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export default function GoToTop() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300)
		}

		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<button
			onClick={scrollToTop}
			className={cn(styles.goToTop, { [styles.visible]: isVisible })}
			aria-label='Go to top'>
			<ArrowUpIcon fontSize={'2rem'} />
		</button>
	)
}
