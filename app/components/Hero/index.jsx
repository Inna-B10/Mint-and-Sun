'use client'
import cn from 'clsx'

import Link from 'next/link'
import { Search } from '..'
import styles from './index.module.scss'

export default function Hero({ className, title, onSearch }) {
	return (
		<div className={cn(className, styles.cover)}>
			<Search onSearch={onSearch} />
			<Link href={'/'} title='Home' className={styles.coverTitle}>
				<h1>{title}</h1>
			</Link>
		</div>
	)
}
