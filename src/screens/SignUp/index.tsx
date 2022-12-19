import React from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { stylesInput } from '../../components/Input/styles'
import { Ionicons } from '@expo/vector-icons'

export const SignUpScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>()

	const [loading, setLoading] = React.useState(false)
	const [Error, setError] = React.useState(false)
	const [NotDigit, setNotDigit] = React.useState(false)
	const [NotPasswordMatch, setNotPasswordMatch] = React.useState(false)
	const [visible, setVisible] = React.useState(false)

	const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [passwordConfirmation, setPasswordConfirmation] = React.useState('')

	const handleSignUp = async () => {
		if (name === '' || email === '' || password === '' || passwordConfirmation === '') {
			setNotPasswordMatch(false)
			setNotDigit(true)
			return
		}

		if (password !== passwordConfirmation) {
			setNotPasswordMatch(true)
			return
		}

		try {
			setLoading(true)
			setNotPasswordMatch(false)
			setNotDigit(false)

			await api.post('/signup', {
				name,
				email,
				password,
				password_confirmation: passwordConfirmation
			})

			setLoading(false)
			navigation.navigate('SignIn')
			setName('')
			setEmail('')
			setPassword('')
			setPasswordConfirmation('')
		} catch (err) {
			console.error(err)
			setError(true)
			setNotDigit(false)
			setLoading(false)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			<Input
				placeholder={'Full Name'}
				autoCapitalize="none"
				keyboardType="email-address"
				value={name}
				onChangeText={setName}
				placeholderTextColor={NotDigit ? '#f00' : '#ddd'}
				style={[stylesInput.input, NotDigit ? { borderColor: '#f00' } : { borderColor: '#ddd' }]}
			/>
			<Input
				placeholder={'Email'}
				autoCapitalize="none"
				keyboardType="email-address"
				value={email}
				onChangeText={setEmail}
				placeholderTextColor={NotDigit ? '#f00' : '#ddd'}
				style={[stylesInput.input, NotDigit ? { borderColor: '#f00' } : { borderColor: '#ddd' }]}
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

			<View
				style={[
					styles.passwordContainer,
					NotDigit || Error ? { borderColor: '#f00' } : { borderColor: '#ddd' }
				]}
			>
				<Input
					placeholder={'Password Confirmation'}
					secureTextEntry={visible}
					value={passwordConfirmation}
					onChangeText={setPasswordConfirmation}
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

			{NotDigit == true && <Text style={styles.text}>All fields are required</Text>}
			{NotPasswordMatch == true && <Text style={styles.text}>Passwords do not match</Text>}
			{Error == true && <Text style={styles.text}>Email address already used.</Text>}

			<Button onPress={handleSignUp}>
				{loading ? <ActivityIndicator size={24} color="#000" /> : 'Create Account'}
			</Button>
		</SafeAreaView>
	)
}
