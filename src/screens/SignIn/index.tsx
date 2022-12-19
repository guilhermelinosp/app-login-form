import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../contexts/AuthContext'
import { stylesInput } from '../../components/Input/styles'
import { Ionicons } from '@expo/vector-icons'

export const SignInScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>()
	const { signIn, loadingAuth, Error, setError } = React.useContext(AuthContext)

	const [NotDigit, setNotDigit] = React.useState(false)
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [visible, setVisible] = React.useState(false)

	const handleForgotPassword = () => {
		navigation.navigate('ForgotPassword')
	}

	const handleSignIn = async () => {
		if (email === '' || password === '') {
			setError(false)
			setNotDigit(true)
			return
		}

		setNotDigit(false)
		await signIn({ email, password })
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />
			<Input
				placeholder={'Email'}
				autoCapitalize="none"
				keyboardType="email-address"
				value={email}
				onChangeText={setEmail}
				placeholderTextColor={NotDigit || Error ? '#f00' : '#ddd'}
				style={[
					stylesInput.input,
					NotDigit || Error ? { borderColor: '#f00' } : { borderColor: '#ddd' }
				]}
			/>

			<View
				style={[
					styles.passwordContainer,
					NotDigit || Error ? { borderColor: '#f00' } : { borderColor: '#ddd' }
				]}
			>
				<Input
					placeholder={'Password'}
					secureTextEntry={visible}
					value={password}
					onChangeText={setPassword}
					placeholderTextColor={NotDigit || Error ? '#f00' : '#ddd'}
					style={[
						stylesInput.input,
						NotDigit || Error ? { borderColor: '#f00' } : { borderColor: '#ddd' },
						{ marginBottom: 2, borderBottomWidth: 0, width: '90%' }
					]}
				/>
				<TouchableOpacity activeOpacity={0.9} onPress={() => setVisible(!visible)}>
					<Ionicons name={visible ? 'eye' : 'eye-off'} color="#ddd" size={25} />
				</TouchableOpacity>
			</View>

			{NotDigit == true && <Text style={styles.text}>Email and password is required</Text>}
			{Error == true && <Text style={styles.text}>Email or password incorrect</Text>}
			{loadingAuth ? (
				<Button onPress={handleSignIn}>
					<ActivityIndicator size={24} color="#000" />
				</Button>
			) : (
				<Button onPress={handleSignIn}> Sign In </Button>
			)}
			<View style={styles.textButton}>
				<Text style={styles.textB}>Forgot your Password? </Text>
				<TouchableOpacity activeOpacity={0.9} onPress={handleForgotPassword}>
					<Text style={styles.button}> Reset</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
