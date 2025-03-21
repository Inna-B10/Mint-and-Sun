import { urlFor } from '@/sanity/lib/image'
import cn from 'clsx'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Title } from '..'
import styles from './index.module.scss'

export default function PostsListItem({
	className,
	icon,
	title,
	description,
	slug,
	date,
}) {
	const formattedDate = format(new Date(date), 'dd MMM yyyy')

	return (
		<Link
			href={`/post/${encodeURIComponent(slug.current)}`}
			className={cn(className, styles.post, styles.postLink)}>
			<div className={styles.postDate}>{formattedDate}</div>
			<Title size='small' className={styles.postTitle}>
				{title}
			</Title>
			<div>
				<Image
					src={urlFor(icon).url()}
					alt={icon.alt || ''}
					role='category icon'
					width={100}
					height={100}
					className={styles.postImage}
				/>
				<p className={styles.postDescription}>{description}</p>
			</div>
		</Link>
	)
}
