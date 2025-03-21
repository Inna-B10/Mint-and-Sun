import { fetchAllPosts } from './api/fetchAllPosts'
import {
	Hero,
	PostsGrid,
	PostsList,
	Section,
	SocialNetworks,
	Subscribe,
} from './components'
import { LOAD_MORE_STEP } from './constants/constants'

export default async function Home() {
	const { posts: initialPosts, total } = await fetchAllPosts(0, LOAD_MORE_STEP)

	return (
		<>
			<main>
				<a href='http://localhost:3000/studio' target='_blank'>
					Studio
				</a>
				<Section>
					<Hero title='Mint & Sun' />
					<SocialNetworks />
					<Subscribe />
				</Section>
				<Section>
					{/* <Title>Last Posts</Title> */}
					<PostsGrid>
						<PostsList initialPosts={initialPosts} total={total} />
					</PostsGrid>
				</Section>
			</main>
			<footer></footer>
		</>
	)
}
