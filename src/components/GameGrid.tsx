import React from 'react'
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import useGames from '../hooks/useGames'
import { GameQuery } from '../App'

interface Props {
	gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data: games, isLoading, error, hasNextPage, fetchNextPage } = useGames(gameQuery)
	const skeletons = Array(6).fill(0)

	if (error) return <Text>{error.message}</Text>

	const fetchedGamesCount = games?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0

	return (
		<InfiniteScroll
			dataLength={fetchedGamesCount}
			hasMore={hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} padding={'10px'}>
				{isLoading &&
					skeletons.map((_, index) => (
						<GameCardContainer key={index}>
							<GameCardSkeleton></GameCardSkeleton>
						</GameCardContainer>
					))}
				{games?.pages?.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map(game => (
							<GameCardContainer key={game.id}>
								<GameCard game={game}></GameCard>
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	)
}

export default GameGrid
