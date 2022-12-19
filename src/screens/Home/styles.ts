import { StyleSheet, Platform } from 'react-native'

const rem = 16

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 2 * rem,
		marginTop: Platform.OS === 'ios' ? rem * 26.5 : rem * 21
	},

	text: {
		fontSize: 1.5 * rem,
		fontWeight: 'bold',
		color: '#fff',
		marginTop: 1.5 * rem
	}
})
