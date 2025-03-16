import { Marcellus, Raleway } from 'next/font/google'

export const raleway = Raleway({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	weight: ['400', '700'],
	variable: '--font-default',
})

export const marcellus = Marcellus({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	weight: '400',
	variable: '--font-title',
})
