import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const BodyPortableTextComponents = {
	block: {
		normal: ({ children }) => <div>{children}</div>,
	},
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null
			}

			const imageUrl = urlFor(value).auto('format').fit('max').url()

			return (
				<div style={{ margin: '1rem 0' }}>
					<Image
						src={imageUrl}
						alt={value.alt || ''}
						width={800}
						height={600}
						quality={85}
						priority={false}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
						}}
					/>
				</div>
			)
		},
		inlineImageObject: ({ value }) => {
			return (
				<span
					style={{
						maxWidth: '50%',
						float: value.float === 'right' ? 'right' : 'left',
						marginLeft: value.float === 'right' ? '1.5rem' : '0',
						marginRight: value.float === 'left' ? '1.5rem' : '0',
						marginTop: '1rem',
					}}>
					<img
						src={urlFor(value.image.asset).width(800).url()}
						alt={value.alt || ''}
						style={{
							display: 'block',
							width: '100%',
							height: 'auto',
						}}
					/>
				</span>
			)
		},
	},
	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined

			return (
				<a
					href={value.href}
					rel={rel}
					style={{
						color: '#3b82f6',
						textDecoration: 'underline',
					}}>
					{children}
				</a>
			)
		},
	},
}

export default BodyPortableTextComponents
