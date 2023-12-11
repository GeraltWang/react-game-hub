import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { Game } from '../entities/Game'

const apiClient = new APIClient<Game>('/games')

const useGameDetail = (slug: string) =>
	useQuery({
		queryKey: ['game', slug],
		queryFn: () => apiClient.getDetail(`/${slug}`).then(data => data),
	})

export default useGameDetail
