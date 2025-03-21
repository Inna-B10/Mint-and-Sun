'use client'
import { fetchSearchResult } from '@/app/api/fetchSearchResult'
import { useState } from 'react'
import styles from './index.module.scss'

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
		} catch (error) {
			console.error('Search error:', error)
		}
	}

	return (
		<form onSubmit={handleSearch} className={styles.form}>
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
