import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { AuthRoutes } from './auth.route'
import { AppRoutes } from './app.router'
import { AuthContext } from '../contexts/AuthContext'

export const Routes = () => {
	const { isAuthenticated, loading } = React.useContext(AuthContext)

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size={50} color="#000" />
			</View>
		)
	}

	return isAuthenticated ? <AppRoutes /> : <AuthRoutes />
}
