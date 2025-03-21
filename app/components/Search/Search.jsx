'use client'
import { fetchSearchResult } from '@/app/api/fetchSearchResult'
import { useState } from 'react'

export default function Search({ onSearch }) {
	const [query, setQuery] = useState('')

	const handleSearch = async e => {
		e.preventDefault()

		if (!query.trim()) {
			onSearch(null)
			return
		}
		try {
			const { posts: resultPosts } = await fetchSearchResult(query)
			onSearch(resultPosts)

			// 			const res = await fetch(`/api/posts/search?query=${query}`)
			// 			const data = await res.json()
			//
			// 			onSearch(data.posts)
		} catch (error) {
			console.error('Search error:', error)
		}
	}

	return (
		<form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px' }}>
			<input
				type='text'
				placeholder='Search'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</form>
	)
}
