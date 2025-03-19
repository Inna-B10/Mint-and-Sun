import { defineType } from 'sanity'

export const inlineImage = defineType({
	name: 'inlineImageObject',
	type: 'object',
	title: 'Inline Image',
	fields: [
		{
			name: 'image',
			type: 'image',
			options: { hotspot: true },
		},
		{
			name: 'alt',
			type: 'string',
		},
		{
			name: 'float',
			type: 'string',
			title: 'Alignment',
			options: {
				list: [
					{
						title: 'Float left',
						value: 'left',
					},
					{
						title: 'Float right',
						value: 'right',
					},
				],
				layout: 'radio',
			},
			initialValue: 'left',
		},
	],
	options: {
		isInline: true,
	},
})
