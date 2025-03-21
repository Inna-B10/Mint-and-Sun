import cn from 'clsx'
import styles from './index.module.scss'

export default function PostsGrid({ className, children }) {
	return <div className={cn(className, styles.postsGrid)}>{children}</div>
}
