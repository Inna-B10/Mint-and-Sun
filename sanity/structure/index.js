import {
	BookIcon,
	BookmarkFilledIcon,
	ComposeIcon,
	DocumentsIcon,
	EyeOpenIcon,
} from '@sanity/icons'

export const structure = S =>
	S.list()
		.title('Content')
		.items([
			/* ----------------- POSTS ------------------- */
			S.listItem()
				.title('Posts')
				.icon(BookIcon)
				.child(
					S.list()
						.title('Posts by status')
						.items([
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
							S.listItem()
								.title('Published posts')
								.icon(EyeOpenIcon)
								.child(
									S.documentTypeList('posts')
										.title('Published posts')
										.apiVersion('v2025-03-08')
										.filter('_type == "posts" && defined(publishedDate)')
										.child(documentId =>
											S.document().documentId(documentId).schemaType('posts')
										)
								),
							S.listItem()
								.title('Draft posts')
								.icon(ComposeIcon)
								.child(
									S.documentTypeList('posts')
										.title('Draft posts')
										.apiVersion('v2025-03-08')
										.filter('_type == "posts" && !defined(publishedDate)')
										.child(documentId =>
											S.document().documentId(documentId).schemaType('posts')
										)
								),
						])
				),
			S.divider(),

			/* ----------------- CATEGORIES ------------------- */
			S.listItem()
				.title('Categories')
				.icon(BookmarkFilledIcon)
				.child(S.documentTypeList('category').title('Categories')),
		])
