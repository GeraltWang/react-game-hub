import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import useGames from '../hooks/useGames'

const GameGrid = () => {
	const { data: games, isLoading, error } = useGames()
	const skeletons = Array(6).fill(0)

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding={'10px'}>
				{isLoading &&
					skeletons.map((_, index) => (
						<GameCardContainer>
							<GameCardSkeleton key={index}></GameCardSkeleton>
						</GameCardContainer>
					))}
				{games.map(game => (
					<GameCardContainer>
						<GameCard game={game} key={game.id}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
