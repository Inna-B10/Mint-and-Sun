import { getExtension } from '@sanity/asset-utils'
import { ComposeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'
import AltInput from './components/AltInput'
import GenerateMetaInput from './components/GenerateMetaInput'

export const postType = defineType({
	name: 'posts',
	title: 'Post',
	type: 'document',
	groups: [
		{
			name: 'content',
			title: 'Content',
		},
		{
			name: 'meta',
			title: 'Meta',
		},
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: rule => rule.required().error('Required field'),
			group: 'content',
		}),
		defineField({
			name: 'meta_title',
			type: 'string',
			title: 'Meta title',
			validation: rule => rule.required().error('Required field'),
			group: 'meta',
			components: {
				input: GenerateMetaInput,
			},
			options: {
				context: {
					dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'development',
				},
			},
		}),
		defineField({
			name: 'publishedDate',
			type: 'datetime',
			title: 'Published date',
			validation: rule => rule.required().error('Required field'),
			group: 'content',
		}),
		defineField({
			name: 'icon',
			type: 'image',
			title: 'Icon',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alt text',
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
					if (!value || !value.asset || !value.asset._ref) {
						return true
					}

					const filetype = getExtension(value.asset._ref)

					if (!['jpg', 'jpeg', 'png', 'svg', 'webp'].includes(filetype)) {
						return 'Image must be a JPG, PNG, SVG or WEBP'
					}
					return true
				}),
			group: 'content',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				maxLength: 200, // will be ignored if slugify is set
				slugify: input =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
				isUnique: isUniqueAcrossAllDocuments,
				source: doc => doc.title,
			},
			validation: rule => rule.required().error('Required field'),
		}),
		defineField({
			name: 'description',
			type: 'text',
			title: 'Short description',
			group: 'content',
			validation: rule => rule.required().error('Required field'),
		}),
		defineField({
			name: 'body',
			title: 'Body content',
			group: 'content',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'block',
				}),
				defineArrayMember({ type: 'inlineImageObject' }),
				defineArrayMember({
					type: 'image',
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Alt text',
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
				}),
			],
			validation: rule => rule.required().error('Required field'),
		}),
	],

	//update the preview key in the schema
	preview: {
		select: {
			name: 'title',
			date: 'publishedDate',
			icon: 'icon',
		},
		prepare({ name, date, icon }) {
			const nameFormatted = name || 'Untitled post'
			const dateFormatted = date
				? new Date(date).toLocaleDateString(undefined, {
						month: 'short',
						day: 'numeric',
						year: 'numeric',
						hour: 'numeric',
						minute: 'numeric',
					})
				: 'No date'

			return {
				title: nameFormatted,
				subtitle: `Published on ${dateFormatted}`,
				media: icon || ComposeIcon,
			}
		},
	},
})
