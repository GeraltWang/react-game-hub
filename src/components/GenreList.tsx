import { HStack, List, ListItem, Image, Spinner, Button, Heading } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
	selectedGenre: Genre | null
	onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenres()

	if (error) return null
	if (isLoading) return <Spinner />
	return (
		<>
			<Heading as={'h1'} fontSize={'2xl'} marginBottom={4}>Genres</Heading>
			<List>
				{genres.map(genre => (
					<ListItem key={genre.id} paddingY={'6px'}>
						<HStack>
							<Image
								boxSize={'32px'}
								borderRadius={8}
								objectFit={'cover'}
								src={getCroppedImageUrl(genre.image_background)}
							></Image>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize={'large'}
								fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
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
