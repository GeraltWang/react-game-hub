// import useData from './useData'
import { GameQuery } from '../App'
import { useQuery } from '@tanstack/react-query'
import apiClient, { FetchResponse } from '../services/api-client'

export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
	rating_top: number
}

export interface Platform {
	id: number
	name: string
	slug: string
}

const useGames = (gameQuery: GameQuery) =>
	useQuery({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Game>>('/games', {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.search,
					},
				})
				.then(response => response.data.results),
		staleTime: 1000 * 60 * 60 * 24, // 1 day
	})

export default useGames
