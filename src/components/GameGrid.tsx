import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import useGames from '../hooks/useGames'
import { GameQuery } from '../App'

interface Props {
	gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data: games, isLoading, error } = useGames(gameQuery)
	const skeletons = Array(6).fill(0)

	if (error) return <Text>{error}</Text>

	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} padding={'10px'}>
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
	)
}

export default GameGrid
