import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import initialGenres from '../data/genres'
import APIClient from '../services/api-client'
import { Genre } from '../entities/Genre'

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () => apiClient.get().then(data => data.results),
		staleTime: ms('24h'),
		initialData: initialGenres,
	})

export default useGenres
