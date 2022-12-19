import React from 'react'
import { DashboardScreen } from '../screens/Dashboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export const AppRoutes = () => {
	const { Navigator, Screen } = createNativeStackNavigator()

	return (
		<Navigator>
			<Screen
				name="Dashboard"
				component={DashboardScreen}
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
