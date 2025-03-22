import cn from 'clsx'
import styles from './index.module.scss'

export default function ScreenEgg({ className, children, type, icon: Icon }) {
	return (
		<>
			<div
				className={cn(className, styles.screenEgg, {
					[styles.screenEggSocial]: type === 'social',
					[styles.screenEggSearch]: type === 'search',
					[styles.screenEggSubscribe]: type === 'subscribe',
					[styles.screenEggStudio]: type === 'studio',
				})}>
				{Icon && (
					<Icon
						className={cn(styles.screenEggIcon, {
							[styles.screenEggIconSocial]: type === 'social',
							[styles.screenEggIconSearch]: type === 'search',
							[styles.screenEggIconSubscribe]: type === 'subscribe',
							[styles.screenEggIconStudio]: type === 'studio',
						})}
					/>
				)}
				{children}
			</div>
		</>
	)
}
