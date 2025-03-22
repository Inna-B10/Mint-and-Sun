import { socialNetworks } from '@/app/constants/constants'
import { ComposeIcon } from '@sanity/icons'
import cn from 'clsx'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

export default function SocialNetworks({ className }) {
	return (
		<ScreenEgg type='social' icon={ComposeIcon}>
			<ul className={cn(className, styles.list)}>
				{socialNetworks.map(item => (
					<li key={item.id}>
						<a
							href={item.href}
							target='_blank'
							className={styles.listLink}
							title={item.title ? item.title : ''}>
							<item.icon />
						</a>
					</li>
				))}
			</ul>
		</ScreenEgg>
	)
}
