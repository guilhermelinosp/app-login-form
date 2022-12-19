import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignInScreen } from '../screens/SignIn'
import { HomeScreen } from '../screens/Home'
import { SignUpScreen } from '../screens/SignUp'
import { ForgotPasswordScreen } from '../screens/ForgotPassword'

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthRoutes = () => {
	return (
		<Navigator initialRouteName="Home">
			<Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
					contentStyle: {
						backgroundColor: 'transparent'
					}
				}}
			/>
			<Screen
				name="SignIn"
				component={SignInScreen}
				options={{
					headerShown: false,
					contentStyle: {
						backgroundColor: 'transparent'
					}
				}}
			/>
			<Screen
				name="SignUp"
				component={SignUpScreen}
				options={{
					headerShown: false,
					contentStyle: {
						backgroundColor: 'transparent'
					}
				}}
			/>
			<Screen
				name="ForgotPassword"
				component={ForgotPasswordScreen}
				options={{
					headerShown: false,
					contentStyle: {
						backgroundColor: 'transparent'
					}
				}}
			/>
		</Navigator>
	)
}
