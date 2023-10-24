import { useState } from 'react'
import { Grid, GridItem, Show, HStack, Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import GameGrid from './components/GameGrid'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
	genre: Genre | null
	platform: Platform | null
	sortOrder: string
	search: string
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: '1fr',
					lg: '240px 1fr',
				}}
			>
				<GridItem area='nav'>
					<NavBar
						onSearch={searchText =>
							setGameQuery({
								...gameQuery,
								search: searchText,
							})
						}
					/>
				</GridItem>
				<Show above='lg'>
					<GridItem area='aside' paddingX={4}>
						<GenreList
							selectedGenre={gameQuery.genre}
							onSelectGenre={genre =>
								setGameQuery({
									...gameQuery,
									genre,
								})
							}
						/>
					</GridItem>
				</Show>
				<GridItem area='main'>
					<Box paddingX={2}>
						<GameHeading gameQuery={gameQuery} />
						<HStack spacing={2} marginBottom={2}>
							<PlatformSelector
								selectedPlatform={gameQuery.platform}
								onSelectPlatform={platform =>
									setGameQuery({
										...gameQuery,
										platform,
									})
								}
							></PlatformSelector>
							<SortSelector
								sortOrder={gameQuery.sortOrder}
								onSelectSortOrder={sortOrder => {
									setGameQuery({
										...gameQuery,
										sortOrder,
									})
								}}
							/>
						</HStack>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	)
}

export default App
