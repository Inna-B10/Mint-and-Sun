import { fetchPostsByCategory } from '@/app/api/fetchPostsByCategory'
import { urlFor } from '@/sanity/lib/image'
import { TagsIcon } from '@sanity/icons'
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
	category,
	onSearch,
	isSearching,
}) {
	const formattedDate = format(new Date(date), 'dd MMM yyyy')

	async function searchByCategory(categoryId) {
		const posts = await fetchPostsByCategory(categoryId)

		onSearch(posts)
		isSearching = true
	}
	return (
		<div className={styles.wrapperItem}>
			<Link
				href={`/post/${encodeURIComponent(slug.current)}`}
				className={cn(className, styles.post, styles.postLink)}
				title={icon.alt}>
				<div className={styles.postDate}>{formattedDate}</div>
				<Title size='small' className={styles.postTitle}>
					{title}
				</Title>
				<div>
					<Image
						src={urlFor(icon.asset).url()}
						alt={icon.alt || ''}
						role='category icon'
						width={100}
						height={100}
						className={styles.postImage}
					/>
					<p className={styles.postDescription}>{description}</p>
				</div>
			</Link>
			<Link
				href='/'
				style={{ backgroundColor: 'unset' }}
				onClick={e => {
					e.preventDefault()
					searchByCategory(category._ref)
				}}
				data-title='Show all posts from this category'
				className={styles.postKeywords}>
				<TagsIcon
					style={{
						fontSize: 30,
						color: '#14774D',
						margin: '0px 5px -7px 1.5rem',
						transform: 'rotateY(180deg)',
					}}
				/>
				{icon.alt}
			</Link>
		</div>
	)
}
