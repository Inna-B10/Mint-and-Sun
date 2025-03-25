'use client'
import cn from 'clsx'

import { Search } from '..'
import styles from './index.module.scss'

export default function Hero({ className, title, onSearch }) {
	return (
		<div className={cn(className, styles.cover)}>
			<Search onSearch={onSearch} />
			<h1 className={styles.coverTitle}>{title}</h1>
		</div>
	)
}
