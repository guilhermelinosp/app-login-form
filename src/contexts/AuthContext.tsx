import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services/api'
import { AuthContextProps, AuthProviderProps, UserProps, SignInProps } from '../interfaces'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const AuthContext = React.createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>()

	const [loading, setLoading] = React.useState(true)
	const [loadingAuth, setLoadingAuth] = React.useState(false)
	const [Error, setError] = React.useState(false)

	const [user, setUser] = React.useState<UserProps>({
		id: '',
		name: '',
		email: '',
		token: ''
	})

	const isAuthenticated = !!user.id

	React.useEffect(() => {
		const loadStorageData = async () => {
			const [user, token] = await AsyncStorage.multiGet(['@login:user', '@login:token'])

			if (user[1] && token[1]) {
				api.defaults.headers.Authorization = `Bearer ${token[1]}`
				setUser(JSON.parse(user[1]))
			}

			setLoading(false)
		}
		loadStorageData()
	}, [])

	const signIn = async ({ email, password }: SignInProps): Promise<void> => {
		try {
			setLoadingAuth(true)
			setError(false)

			const { data } = await api.post('/signin', {
				email,
				password
			})

			await AsyncStorage.setItem('@login:user', JSON.stringify(data.user))
			await AsyncStorage.setItem('@login:token', data.token)

			setUser({
				id: data.user.id,
				name: data.user.name,
				email: data.user.email,
				token: data.token
			})

			api.defaults.headers['Authorization'] = `Bearer ${data.token}`

			navigation.navigate('Dashboard')

			setLoadingAuth(false)
		} catch (err) {
			console.error(err)
			setLoadingAuth(false)
			setError(true)
		}
	}

	const signOut = async (): Promise<void> => {
		try {
			await AsyncStorage.removeItem('@login:user')
			await AsyncStorage.removeItem('@login:token')

			await AsyncStorage.clear().then(() => {
				setUser({
					id: '',
					name: '',
					email: '',
					token: ''
				})
			})

			api.defaults.headers.Authorization = null
		} catch (err) {
			console.log(`signOut: ${err}`)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				signIn,
				signOut,
				loading,
				loadingAuth,
				Error,
				setError
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
