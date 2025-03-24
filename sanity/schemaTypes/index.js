import { categoryType } from './category'
import { inlineImage } from './inlineImage'
import { postType } from './post'

export const schema = {
	types: [postType, inlineImage, categoryType],
}
