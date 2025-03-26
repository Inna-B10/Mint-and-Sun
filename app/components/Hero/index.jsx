'use client'
import cn from 'clsx'

import { Search } from '..'
import styles from './index.module.scss'

export default function Hero({ className, title, onSearch }) {
	return (
		<>
			<Search onSearch={onSearch} />
			<div className={cn(className, styles.cover)}>
				<div className={styles.coverTitleWrapper}>
					<h1 className={styles.coverTitle}>{title}</h1>
					<div>
						<h2 className={styles.coverTitleH2}>
							Som en bris av mint og stråler av sol
						</h2>
						<h2 className={styles.coverTitleH2}>
							- fyll livet med lys og klarhet
						</h2>
					</div>
				</div>
				<div className={styles.container}>
					<div className={cn(styles.petal, styles.slogan1)}>Bevisst valg</div>
					<div className={cn(styles.petal, styles.slogan2)}>
						<p>Pust inn friskhet,</p>
						<p>strål ut energi</p>
					</div>
					<div className={cn(styles.petal, styles.slogan3)}>
						Finn din energi
					</div>
					<div className={cn(styles.petal, styles.slogan4)}>Lysere vei</div>
				</div>
			</div>
		</>
	)
}
