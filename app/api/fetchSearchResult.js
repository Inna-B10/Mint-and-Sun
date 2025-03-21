import { client } from '@/sanity/lib/client'
import { POSTS_SEARCH } from '@/sanity/lib/queries'

export async function fetchSearchResult(query) {
	const params = { query }

	const { posts } = await client.fetch(POSTS_SEARCH, params)

	return { posts }
}
