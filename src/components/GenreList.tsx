import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres()

  if (error) return null

	return (
		<List>
      { isLoading && <Spinner /> }
			{genres.map(genre => (
				<ListItem key={genre.id} paddingY={'6px'}>
					<HStack>
						<Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Text fontSize={'large'}>{ genre.name }</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
