import { fetchAllPosts } from './api/fetchAllPosts'
import { HomeWrapper } from './components'

import { LOAD_MORE_STEP } from './constants/constants'

export default async function Home() {
	const { posts: initialPosts, total } = await fetchAllPosts(0, LOAD_MORE_STEP)

	return (
		<>
			<main>
				{/*//[TODO] change to production host */}
				<a href='http://localhost:3000/studio' target='_blank'>
					Studio
				</a>
				<HomeWrapper initialPosts={initialPosts} total={total} />
				{/* <Section>
					<Hero title='Mint & Sun' />
					<Search onSearch={setSearchResults} />
					<SocialNetworks />
					<Subscribe />
				</Section>
				<Section>
					<PostsGrid initialPosts={initialPosts} total={total} />
					<PostsList
							initialPosts={initialPosts}
							total={total}
							searchResults={searchResults !== null ? searchResults : undefined}
							isSearching={searchResults !== null}
						/>
				</Section> */}
			</main>
			<footer></footer>
		</>
	)
}
