import {
	EnvelopeIcon,
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
} from '@sanity/icons'

// export const revalidate = 3600
export const revalidate = 60

export const LOAD_MORE_STEP = 4

export const socialNetworks = [
	{
		id: 1,
		href: 'mailto:name@email.com',
		icon: EnvelopeIcon,
		title: 'Kontakt me',
	},
	{
		id: 2,
		href: 'https://github.com',
		icon: GithubIcon,
		title: 'Github',
	},
	{
		id: 3,
		href: 'https://twitter.com',
		icon: TwitterIcon,
		title: 'Twitter',
	},
	{
		id: 4,
		href: 'https://www.linkedin.com',
		icon: LinkedinIcon,
		title: 'LinkedIn',
	},
]
