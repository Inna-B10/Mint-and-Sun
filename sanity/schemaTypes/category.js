import { getExtension } from '@sanity/asset-utils'
import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import AltInput from './components/AltInput'

export const categoryType = defineType({
	name: 'category',
	type: 'document',
	title: 'Category',
	icon: UserIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Category Title',
			validation: Rule => Rule.required(),
		}),
		// defineField({
		// 	name: 'slug',
		// 	type: 'slug',
		// 	title: 'Slug',
		// 	options: {
		// 		source: 'title',
		// 		slugify: input =>
		// 			input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
		// 	},
		// 	validation: Rule => Rule.required(),
		// }),
		defineField({
			name: 'icon',
			type: 'image',
			title: 'Category Icon',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt text (keywords)',
					components: {
						input: AltInput,
					},
					hidden: ({ parent }) => {
						return !parent?.asset
					},
					validation: rule =>
						rule.custom((caption, context) => {
							const parent = context.parent

							if (parent?.asset && !caption) {
								return 'Alt text is required when an image is uploaded'
							}
							return true //if no image uploaded
						}),
				},
			],
			validation: rule =>
				rule.custom(value => {
					// if (!value || !value.asset || !value.asset._ref) {
					// 	return true
					// }

					const filetype = getExtension(value.asset._ref)

					if (!['jpg', 'jpeg', 'png', 'svg', 'webp'].includes(filetype)) {
						return 'Image must be a JPG, PNG, SVG or WEBP'
					}
					return true
				}),
		}),
	],
})
