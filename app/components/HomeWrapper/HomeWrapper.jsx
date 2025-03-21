'use client'
import { useState } from 'react'
import {
	Hero,
	PostsGrid,
	PostsList,
	Section,
	SocialNetworks,
	Subscribe,
} from '..'

export function HomeWrapper({ initialPosts, total }) {
	const [searchResults, setSearchResults] = useState(null)

	return (
		<>
			<Section>
				<Hero title='Mint & Sun' onSearch={setSearchResults} />
				<SocialNetworks />
				<Subscribe />
			</Section>
			<Section>
				<PostsGrid>
					<PostsList
						initialPosts={initialPosts}
						total={total}
						searchResults={searchResults !== null ? searchResults : undefined}
						isSearching={searchResults !== null}
					/>
				</PostsGrid>
			</Section>
		</>
	)
}
