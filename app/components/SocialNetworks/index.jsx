import { socialNetworks } from '@/app/constants/constants'
import { ComposeIcon } from '@sanity/icons'
import cn from 'clsx'
import Link from 'next/link'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

export default function SocialNetworks({ className }) {
	return (
		<ScreenEgg type='social' icon={ComposeIcon}>
			<ul className={cn(className, styles.list)}>
				{socialNetworks.map(item => (
					<li key={item.id}>
						<Link
							href={item.href}
							target='_blank'
							className={styles.listLink}
							data-title={item.title ? item.title : ''}>
							<item.icon />
						</Link>
					</li>
				))}
			</ul>
		</ScreenEgg>
	)
}
