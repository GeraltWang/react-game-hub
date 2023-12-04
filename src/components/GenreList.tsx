import { HStack, List, ListItem, Image, Spinner, Button, Heading } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../store'

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres()
	const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
	const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

	if (error) return null
	if (isLoading) return <Spinner />
	return (
		<>
			<Heading as={'h1'} fontSize={'2xl'} marginBottom={4}>
				Genres
			</Heading>
			<List>
				{genres?.map(genre => (
					<ListItem key={genre.id} paddingY={'6px'}>
						<HStack>
							<Image
								boxSize={'32px'}
								borderRadius={8}
								objectFit={'cover'}
								src={getCroppedImageUrl(genre.image_background)}
							></Image>
							<Button
								onClick={() => setSelectedGenreId(genre.id)}
								fontSize={'large'}
								fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
								textAlign={'left'}
								whiteSpace={'normal'}
								variant='link'
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GenreList
