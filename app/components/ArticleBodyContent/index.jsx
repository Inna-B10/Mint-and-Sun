import cn from 'clsx'
import { PortableText } from 'next-sanity'
import { PortableTextComponents } from '..'
import styles from './index.module.scss'

export default function ArticleBodyContent({ className, body }) {
	return (
		<div className={cn(className, styles.content)}>
			<PortableText value={body} components={PortableTextComponents} />
		</div>
	)
}
