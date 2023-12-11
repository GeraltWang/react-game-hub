import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import initialPlatforms from '../data/platforms'
import APIClient from '../services/api-client'
import { Platform } from '../entities/Platform'

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () => apiClient.get().then(data => data.results),
		staleTime: ms('24h'),
		initialData: initialPlatforms,
	})

export default usePlatforms
