import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../components/Button'

import { styles } from './styles'
export const HomeScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>()

	const handleSignIn = () => {
		navigation.navigate('SignIn')
	}

	const handleSignUp = () => {
		navigation.navigate('SignUp')
	}

	return (
		<ImageBackground
			source={require('../../../assets/background.png')}
			style={{ width: '100%', height: '100%' }}
		>
			<SafeAreaView style={styles.container}>
				<StatusBar style="light" />
				<Button onPress={handleSignUp}> Try it Free </Button>
				<TouchableOpacity activeOpacity={0.9} onPress={handleSignIn}>
					<Text style={styles.text}> Sign In</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	)
}
