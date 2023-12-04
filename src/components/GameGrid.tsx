import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
	const { data: games, isLoading, error, hasNextPage, fetchNextPage } = useGames()
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
