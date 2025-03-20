import { Box, Button, Flex } from '@sanity/ui'
import { PatchEvent, set, unset, useFormValue } from 'sanity'

export default function GenerateMetaInput(props) {
	// console.log(props)
	const { onChange, renderDefault } = props

	// get the entire document (the root of the form)
	const doc = useFormValue([])

	// get the context from props
	const context = props.schemaType?.options?.context || {}

	const generateValue = () => {
		const dataset = context.dataset || 'development'
		const newValue =
			dataset === 'production'
				? `${doc?.title || ''} | ${doc?._type}`
				: doc?.title || ''
		onChange(PatchEvent.from(newValue ? set(newValue) : unset()))
	}

	return (
		<Flex gap={2} align='flex-end'>
			{/* input field */}
			<Box flex={1}>{renderDefault(props)}</Box>

			{/* button Generate */}
			<Button
				text='Generate'
				tone='default' // gray
				mode='ghost' // without fill (like slug)
				onClick={generateValue}
			/>
		</Flex>
	)
}
