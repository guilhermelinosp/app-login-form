import { StyleSheet, Platform } from 'react-native'

const rem = 16

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 2 * rem
	},
	text: {
		fontSize: 0.8 * rem,
		color: '#f00',
		fontWeight: 'bold',
		marginTop: Platform.OS === 'ios' ? -0.5 * rem : -0.55 * rem,
		marginBottom: Platform.OS === 'ios' ? -0.5 * rem : -0.55 * rem
	}
})
