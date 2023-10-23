import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres()

	return (
		<List>
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