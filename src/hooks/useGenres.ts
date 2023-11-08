import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import { FetchResponse } from './useData'
import initialGenres from '../data/genres'
// import useData from './useData'

export interface Genre {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

// const useGenres = () => useData<Genre>('/genres')

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(response => response.data.results),
		staleTime: 1000 * 60 * 60 * 24, // 1 day
		initialData: initialGenres,
	})

export default useGenres
