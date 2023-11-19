import { useQuery } from '@tanstack/react-query'
import apiClient, { FetchResponse } from '../services/api-client'
import initialPlatforms from '../data/platforms'

export interface Platform {
	id: number
	name: string
	slug: string
}

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () =>
			apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(response => response.data.results),
		staleTime: 1000 * 60 * 60 * 24, // 1 day
		initialData: initialPlatforms,
	})

export default usePlatforms
