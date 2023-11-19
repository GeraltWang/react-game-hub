import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import initialGenres from '../data/genres'

export interface Genre {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () => apiClient.get().then(data => data.results),
		staleTime: 1000 * 60 * 60 * 24, // 1 day
		initialData: initialGenres,
	})

export default useGenres
