'use client'
import cn from 'clsx'
import Search from '../Search/Search'
import styles from './index.module.scss'

export default function Hero({ className, title, onSearch }) {
	return (
		<div className={cn(className, styles.cover)}>
			<h1
				className={styles.coverTitle}
				//[TODO] check it!
				dangerouslySetInnerHTML={{ __html: title }}
			/>
			<Search onSearch={onSearch} />
		</div>
	)
}
