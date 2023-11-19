import { HStack, List, ListItem, Image, Spinner, Button, Heading } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
	selectedGenreId?: number
	onSelectGenreId: (genre: number) => void
}

const GenreList = ({ selectedGenreId, onSelectGenreId }: Props) => {
	const { data: genres, isLoading, error } = useGenres()

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
								onClick={() => onSelectGenreId(genre.id)}
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
