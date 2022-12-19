import { SignInProps, UserProps } from '.'

export type AuthContextProps = {
	user: UserProps
	isAuthenticated: boolean
	signIn: (credentials: SignInProps) => Promise<void>
	signOut: () => Promise<void>
	loading: boolean
	loadingAuth: boolean
	Error: boolean
	setError: (value: boolean) => void
}
