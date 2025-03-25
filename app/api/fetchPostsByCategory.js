import { client } from '@/sanity/lib/client'
import { POSTS_BY_CATEGORY } from '@/sanity/lib/queries'

export async function fetchPostsByCategory(categoryId) {
	const posts = await client.fetch(POSTS_BY_CATEGORY, { categoryId })

	return posts
}
