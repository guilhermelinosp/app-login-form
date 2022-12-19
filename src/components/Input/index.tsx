import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { stylesInput } from './styles'

export const Input = ({ ...rest }) => {
	return (
		<>
			<TextInput style={stylesInput.input} {...rest}></TextInput>
		</>
	)
}
