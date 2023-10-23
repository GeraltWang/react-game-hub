import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useGames from '../hooks/useGames'

const GameGrid = () => {
	const { games, isLoading, error } = useGames()
	const skeletons = Array(6).fill(0)

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={'10px'}>
				{isLoading && skeletons.map((_, index) => <GameCardSkeleton key={index}></GameCardSkeleton>)}
				{games.map(game => (
					<GameCard game={game} key={game.id}></GameCard>
				))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
