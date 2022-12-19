import { StyleSheet, Platform } from 'react-native'

const rem = 16

export const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffbf00',
		borderRadius: 0.5 * rem,
		height: 3.5 * rem,
		width: '100%',
		marginTop: 2 * rem
	},
	text: {
		color: '#000',
		fontSize: 1.5 * rem,
		fontWeight: 'bold'
	}
})
