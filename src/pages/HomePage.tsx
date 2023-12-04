import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '240px 1fr',
			}}
		>
			<Show above='lg'>
				<GridItem area='aside' paddingX={4}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Box paddingX={2}>
					<GameHeading />
					<HStack spacing={4} marginBottom={2}>
						<PlatformSelector></PlatformSelector>
						<SortSelector />
					</HStack>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	)
}

export default HomePage
