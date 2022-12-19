import { StyleSheet, Platform } from 'react-native'

const rem = 16

export const stylesInput = StyleSheet.create({
	input: {
		backgroundColor: '#fff',
		borderColor: '#ddd',
		borderBottomWidth: 2,
		height: 3.5 * rem,
		width: '98%',
		marginBottom: 1.5 * rem,
		paddingHorizontal: 1.5 * rem,
		fontSize: 1 * rem,
		fontWeight: 'bold'
	}
})
