import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PatchEvent, set, useFormValue } from 'sanity'

const IconFromCategoryInput = ({ onChange }) => {
	const categoryRef = useFormValue(['category'])
	const [categoryIcon, setCategoryIcon] = useState(null)

	useEffect(() => {
		if (!categoryRef) {
			return
		}

		const fetchCategoryIcon = async () => {
			const category = await client.fetch(
				`*[_type == "category" && _id == $id][0]{
        icon {
          alt,
          asset->{
            _id,
            url
          }
        }
      }`,
				{ id: categoryRef._ref }
			)

			if (category?.icon?.asset?._id) {
				const iconAssetRef = category.icon.asset._id

				onChange(
					PatchEvent.from([
						set({
							asset: {
								_type: 'reference',
								_ref: iconAssetRef,
							},
							alt: category.icon.alt || '',
						}),
					])
				)

				setCategoryIcon({
					url: category.icon.asset.url,
					alt: category.icon.alt || '',
				})
			} else {
				console.warn('No valid icon asset ref found in category:', category)
				setCategoryIcon(null)
			}
		}

		fetchCategoryIcon()
	}, [categoryRef?._ref])

	// If there is no category or icon
	if (!categoryRef?._ref) {
		return <div>First select a category to pull up the icon</div>
	}

	if (!categoryIcon) {
		return <div>Loading icon from category...</div>
	}

	return (
		<div>
			{/* <div>Icon from category:</div> */}
			<Image
				src={categoryIcon?.url}
				alt={categoryIcon?.alt || 'Category icon'}
				width={100}
				height={100}
			/>
			<div style={{ fontSize: 'small', marginTop: '1rem' }}>
				Alt: {categoryIcon.alt}
			</div>
		</div>
	)
}

export default IconFromCategoryInput
