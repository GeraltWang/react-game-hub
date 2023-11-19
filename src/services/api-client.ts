import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
	count: number
	results: T[]
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '480194a2c53d4fc6a916c865bd798438',
	},
})

class APIClient<T> {
	endpoint: string
	constructor(endpoint: string) {
		this.endpoint = endpoint
	}

	get = async (config?: AxiosRequestConfig) => {
		return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
	}
}

export default APIClient
