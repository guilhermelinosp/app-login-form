import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../../contexts/AuthContext'

export const DashboardScreen = () => {
	const { signOut, user } = React.useContext(AuthContext)

	const handleSignOut = () => {
		signOut()
	}
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={handleSignOut}>
				<FontAwesome name="sign-out" size={30} color="#f00" />
			</TouchableOpacity>
		</SafeAreaView>
	)
}
