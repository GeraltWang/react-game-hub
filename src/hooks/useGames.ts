import useData from './useData'
import { Genre } from './useGenres'
import { Platform as PlatformItem } from '../hooks/usePlatforms'

export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
}

export interface Platform {
	id: number
	name: string
	slug: string
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatformItem | null) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: selectedGenre?.id,
				parent_platforms: selectedPlatform?.id,
			},
		},
		[selectedGenre?.id, selectedPlatform?.id]
	)

export default useGames
