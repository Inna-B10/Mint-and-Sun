'use client'
import { fetchSearchResult } from '@/app/api/fetchSearchResult'
import { SearchIcon } from '@sanity/icons'
import { useState } from 'react'
import ScreenEgg from '../ScreenEgg'
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
		} finally {
			setQuery('')
		}
	}

	return (
		<ScreenEgg type='search' icon={SearchIcon}>
			<form onSubmit={handleSearch} className={styles.form}>
				<input
					type='text'
					placeholder='Search'
					value={query}
					autoFocus
					name='search'
					onChange={e => setQuery(e.target.value)}
					className={styles.formInput}
				/>
				<button type='submit' className={styles.formButton}>
					<SearchIcon viewBox='3 2 20 20' className={styles.formSearchIcon} />
				</button>
			</form>
		</ScreenEgg>
	)
}
