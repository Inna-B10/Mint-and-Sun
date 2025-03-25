import { GoToTop } from './components'
import './styles/0_reset.scss'
import { marcellus, raleway } from './styles/fonts'
import './styles/globals.scss'

export const metadata = {
	title: 'Mint & Sun',
	description:
		'Et sted for deg som vil leve lysere, mer bevisst og aktivt. Selvutvikling, reiser, helse - alt som gir livet mening og energi.',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='no'
			className={`
    ${raleway.variable}
    ${marcellus.variable}
    `}>
			<body>
				<GoToTop />
				{children}
			</body>
		</html>
	)
}
