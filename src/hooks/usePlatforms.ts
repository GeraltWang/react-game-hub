import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import initialPlatforms from '../data/platforms'

export interface Platform {
	id: number
	name: string
	slug: string
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () => apiClient.get().then(data => data.results),
		staleTime: 1000 * 60 * 60 * 24, // 1 day
		initialData: initialPlatforms,
	})

export default usePlatforms
