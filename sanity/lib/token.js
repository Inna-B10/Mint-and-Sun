export const token = process.env.SANITY_PREVIEW_TOKEN

if (!token) {
	throw new Error('Missing SANITY TOKEN')
}
