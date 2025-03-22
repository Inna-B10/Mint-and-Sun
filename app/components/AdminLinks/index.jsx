import { GroqIcon } from '@sanity/icons'
import Link from 'next/link'
import ScreenEgg from '../ScreenEgg'
import styles from './index.module.scss'

export default function AdminLinks() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

	return (
		<ScreenEgg type='studio'>
			<Link href={`${siteUrl}/studio`} target='_blank' title='Studio'>
				<GroqIcon className={styles.adminLinks} />
			</Link>
		</ScreenEgg>
	)
}
