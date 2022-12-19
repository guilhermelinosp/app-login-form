import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ButtonProps } from '../../interfaces'
import { styles } from './styles'

export const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<>
			<TouchableOpacity style={styles.button} activeOpacity={0.9} {...rest}>
				<Text style={styles.text}>{children}</Text>
			</TouchableOpacity>
		</>
	)
}
