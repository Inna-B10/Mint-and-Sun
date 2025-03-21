'use client'
import { LOAD_MORE_STEP } from '@/app/constants/constants'
import { useState } from 'react'
import { Button, PostsListItem } from '..'

export default function PostsList({
	initialPosts,
	total,
	searchResults,
	isSearching = false,
}) {
	const [loadedPosts, setLoadedPosts] = useState(initialPosts)
	const [loading, setLoading] = useState(false)

	const currentPosts = isSearching ? searchResults : loadedPosts
	// console.log(initialPosts)

	const handleLoadMore = async () => {
		setLoading(true)
		try {
			const res = await fetch(
				`/api/posts?start=${loadedPosts.length}&end=${loadedPosts.length + LOAD_MORE_STEP}`
			)
			const data = await res.json()

			setPosts(prev => [...prev, ...data.posts])
		} catch (error) {
			console.error('Error loading posts:', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			{currentPosts.map(post => (
				<PostsListItem
					key={post.slug.current}
					icon={post.icon}
					description={post.description}
					slug={post.slug}
					title={post.title}
					date={post.publishedDate}
				/>
			))}
			{!isSearching && loadedPosts.length < total && (
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

			{isSearching && searchResults.length === 0 && (
				<p style={{ textAlign: 'center' }}>No results were found.</p>
			)}
		</>
	)
}
