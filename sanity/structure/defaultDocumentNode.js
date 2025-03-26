import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode = (S, { schemaType }) => {
	switch (schemaType) {
		case `category`:
			return S.document().views([
				S.view.form(),
				S.view
					.component(DocumentsPane)
					.options({
						query: `*[_type == "posts" && references($id)]`,
						params: { id: `_id` },
						options: { perspective: 'drafts' },
					})
					.title('View posts'),
			])
		default:
			return S.document().views([S.view.form()])
	}
}
