import { ComposeIcon } from '@sanity/icons'

import { defineArrayMember, defineField, defineType } from 'sanity'
import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'
import AltInput from './components/AltInput'
import GenerateMetaInput from './components/GenerateMetaInput'
import IconFromCategoryInput from './components/IconFromCategoryInput'

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
			name: 'details',
			title: 'Details',
		},
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: rule => rule.required().error('Required field'),
			group: ['content', 'details'],
		}),
		defineField({
			name: 'meta_title',
			type: 'string',
			title: 'Meta title',
			validation: rule => rule.required().error('Required field'),
			group: 'details',
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
			group: 'details',
		}),
		defineField({
			name: 'publishedDate',
			type: 'datetime',
			title: 'Published date',
			validation: rule => rule.required().error('Required field'),
			group: ['content', 'details'],
		}),
		defineField({
			name: 'category',
			type: 'reference',
			title: 'Category',
			to: [{ type: 'category' }],
			validation: rule => rule.required().error('Category is required'),
			group: 'details',
		}),
		defineField({
			name: 'icon',
			type: 'image',
			title: 'Icon',
			description:
				'Icon and keywords pulled automatically from selected category',
			components: {
				input: IconFromCategoryInput,
			},
			group: 'details',
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
