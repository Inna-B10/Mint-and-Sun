'use client'
import { useState } from 'react'
import {
	AdminLinks,
	Hero,
	PostsGrid,
	PostsList,
	Section,
	SocialNetworks,
	Subscribe,
} from '..'

export default function HomeWrapper({ initialPosts, total }) {
	const [searchResults, setSearchResults] = useState(null)

	return (
		<main>
			<Section>
				<Hero title='Mint & Sun' onSearch={setSearchResults} />
				<AdminLinks />
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
						onSearch={setSearchResults}
					/>
				</PostsGrid>
			</Section>
		</main>
	)
}
