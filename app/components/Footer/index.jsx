import { socialNetworks } from '@/app/constants/constants'
import Link from 'next/link'
import styles from './index.module.scss'

export default function Footer() {
	return (
		<div className={styles.footer}>
			{socialNetworks.map(item => (
				<div key={item.id}>
					<Link
						href={item.href}
						target='_blank'
						className={styles.listLink}
						data-title={item.title ? item.title : ''}>
						<item.icon />
					</Link>
				</div>
			))}
		</div>
	)
}
