import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api-login-form.herokuapp.com/api/v1'
})
