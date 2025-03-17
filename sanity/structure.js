import {
	BookIcon,
	ComposeIcon,
	DocumentsIcon,
	EyeOpenIcon,
} from '@sanity/icons'

export const structure = S =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Posts')
				.icon(BookIcon)
				.child(
					S.list()
						.title('Posts by status')
						.items([
							/* -------------------------------- All Posts  */
							S.listItem()
								.title('All posts')
								.icon(DocumentsIcon)
								.child(
									S.documentTypeList('posts')
										.title('All posts')
										.child(documentId =>
											S.document().documentId(documentId).schemaType('posts')
										)
								),
							/* ----------------------------- Published Posts  */
							S.listItem()
								.title('Published posts')
								.icon(EyeOpenIcon)
								.child(
									S.documentTypeList('posts')
										.title('Published posts')
										.filter('_type == "posts" && defined(publishedDate)')
										.child(documentId =>
											S.document().documentId(documentId).schemaType('posts')
										)
								),
							/* ------------------------------- Draft Posts  */
							S.listItem()
								.title('Draft posts')
								.icon(ComposeIcon)
								.child(
									S.documentTypeList('posts')
										.title('Draft posts')
										.filter('_type == "posts" && !defined(publishedDate)')
										.child(documentId =>
											S.document().documentId(documentId).schemaType('posts')
										)
								),
						])
				),
		])
