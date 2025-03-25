'use client'
import { LOAD_MORE_STEP } from '@/app/constants/constants'
import { ArrowLeftIcon } from '@sanity/icons'
import { useEffect, useState } from 'react'
import { Button, PostsListItem } from '..'
import styles from './index.module.scss'

export default function PostsList({
	initialPosts,
	total,
	searchResults,
	isSearching = false,
	onSearch,
}) {
	const [loadedPosts, setLoadedPosts] = useState(initialPosts)
	const [loading, setLoading] = useState(false)
	const [isSearchingState, setIsSearchingState] = useState(isSearching)
	const currentPosts = isSearchingState ? searchResults : loadedPosts

	useEffect(() => {
		if (searchResults?.length >= 0) {
			setIsSearchingState(true)
		}
	}, [searchResults])

	const handleBackToHome = () => {
		setIsSearchingState(false)
		setLoadedPosts(initialPosts)
	}

	const handleLoadMore = async () => {
		setLoading(true)
		try {
			const res = await fetch(
				`/api/posts?start=${loadedPosts.length}&end=${loadedPosts.length + LOAD_MORE_STEP}`
			)
			const data = await res.json()

			setLoadedPosts(prev => [...prev, ...data.posts])
		} catch (error) {
			console.error('Error loading posts:', error)
		} finally {
			setLoading(false)
		}
	}

	if (isSearchingState && searchResults.length === 0) {
		return (
			<>
				<button onClick={handleBackToHome} className={styles.backHome}>
					<ArrowLeftIcon viewBox='5 0 20 20' />
					Back Home
				</button>
				<p className={styles.noResult}>No results were found.</p>
			</>
		)
	}

	return (
		<>
			{isSearchingState && searchResults.length > 0 && (
				<button onClick={handleBackToHome} className={styles.backHome}>
					<ArrowLeftIcon viewBox='5 0 20 20' />
					Back Home
				</button>
			)}

			{currentPosts.map(post => (
				<PostsListItem
					key={post.slug.current}
					icon={post.icon}
					description={post.description}
					slug={post.slug}
					title={post.title}
					date={post.publishedDate}
					category={post.category}
					onSearch={onSearch}
					isSearching
				/>
			))}
			{!isSearchingState && loadedPosts.length < total && (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						onClick={() => {
							handleLoadMore()
						}}
						disabled={loading}>
						{loading ? 'Loading...' : 'Load More'}
					</Button>
				</div>
			)}
		</>
	)
}
