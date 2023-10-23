import { HStack, List, ListItem, Image, Spinner, Button } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenres()

	if (error) return null

	return (
		<List>
			{isLoading && <Spinner />}
			{genres.map(genre => (
				<ListItem key={genre.id} paddingY={'6px'}>
					<HStack>
						<Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
						<Button onClick={() => onSelectGenre(genre)} fontSize={'large'} variant='link'>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
