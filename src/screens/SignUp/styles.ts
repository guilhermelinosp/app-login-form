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
		marginBottom: Platform.OS === 'ios' ? -0.5 * rem : -0.54 * rem
	},

	passwordContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderColor: '#ddd',
		borderBottomWidth: 2,
		height: 3.5 * rem,
		width: '99%',
		marginBottom: 1.5 * rem,
		paddingRight: 1 * rem
	}
})
