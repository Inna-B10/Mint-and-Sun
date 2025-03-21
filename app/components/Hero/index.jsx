import cn from 'clsx'
import styles from './index.module.scss'

export default function Hero({ className, title }) {
	return (
		<div className={cn(className, styles.cover)}>
			<h1
				className={styles.coverTitle}
				//[TODO] check it!
				dangerouslySetInnerHTML={{ __html: title }}
			/>
		</div>
	)
}
