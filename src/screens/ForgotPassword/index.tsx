import React from 'react'
import { styles } from './styles'
import { ActivityIndicator, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { stylesInput } from '../../components/Input/styles'

export const ForgotPasswordScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>()

	const [loading, setLoading] = React.useState(false)
	const [email, setEmail] = React.useState('')
	const [Error, setError] = React.useState(false)
	const [NotDigit, setNotDigit] = React.useState(false)

	const handleResetPassword = async (): Promise<any> => {
		if (email == '') {
			setNotDigit(true)
			return
		}

		try {
			setNotDigit(false)
			setError(false)
			setLoading(true)

			const res = await api.post('/forgotpassword', {
				email
			})

			console.log(res.status)

			setLoading(false)

			navigation.navigate('SignIn')

			setEmail('')
		} catch (err) {
			console.error(err)
			setError(true)
			setNotDigit(false)
			setLoading(false)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
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

			{NotDigit == true && <Text style={styles.text}>Email is required</Text>}
			{Error == true && <Text style={styles.text}>Email not found</Text>}

			<Button onPress={handleResetPassword}>
				{loading ? <ActivityIndicator size={24} color="#000" /> : 'Reset Password'}
			</Button>
		</SafeAreaView>
	)
}
