import { fetchAllPosts } from './api/fetchAllPosts'
import { HomeWrapper } from './components'

import { LOAD_MORE_STEP } from './constants/constants'

export default async function Home() {
	const { posts: initialPosts, total } = await fetchAllPosts(0, LOAD_MORE_STEP)

	return <HomeWrapper initialPosts={initialPosts} total={total} />
}
