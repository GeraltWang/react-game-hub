import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import useGames from '../hooks/useGames'
import { Genre } from '../hooks/useGenres'
import { Platform } from '../hooks/usePlatforms'

interface Props {
	selectedGenre: Genre | null
	selectedPlatform: Platform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const { data: games, isLoading, error } = useGames(selectedGenre, selectedPlatform)
	const skeletons = Array(6).fill(0)

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding={'10px'}>
				{isLoading &&
					skeletons.map((_, index) => (
						<GameCardContainer key={index}>
							<GameCardSkeleton></GameCardSkeleton>
						</GameCardContainer>
					))}
				{games.map(game => (
					<GameCardContainer key={game.id}>
						<GameCard game={game}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
