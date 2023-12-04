// import useData from './useData'
import { useInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'
import APIClient, { FetchResponse } from '../services/api-client'
import useGameQueryStore from '../store'
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

const useGames = () => {
	const gameQuery = useGameQueryStore(s => s.gameQuery)

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => (lastPage.next ? allPages.length + 1 : undefined),
		queryFn: ({ pageParam }) =>
			apiClient
				.get({
					params: {
						genres: gameQuery.genreId,
						parent_platforms: gameQuery.platformId,
						ordering: gameQuery.sortOrder,
						search: gameQuery.search,
						page: pageParam,
					},
				})
				.then(data => data),
		staleTime: ms('24h'),
	})
}

export default useGames
