import { GroqIcon } from '@sanity/icons'
import Link from 'next/link'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

export default function AdminLinks() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

	return (
		<ScreenEgg type='studio'>
			<span className={styles.adminLinks}>
				<Link href={`${siteUrl}/studio`} target='_blank' data-title='Studio'>
					<GroqIcon />
				</Link>
			</span>
		</ScreenEgg>
	)
}
