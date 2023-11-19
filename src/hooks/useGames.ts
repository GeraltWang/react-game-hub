// import useData from './useData'
import { GameQuery } from '../App'
import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { Platform } from './usePlatforms'

export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
	rating_top: number
}

const apiClient = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) =>
	useQuery({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient
				.get({
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.search,
					},
				})
				.then(data => data.results),
		staleTime: 1000 * 60 * 60 * 24, // 1 day
	})

export default useGames
