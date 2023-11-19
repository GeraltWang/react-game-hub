import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
	gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenres()

	const genre = genres.find(genre => genre.id === gameQuery.genreId)

	const { data: platforms } = usePlatforms()

	const platform = platforms.find(platform => platform.id === gameQuery.platformId)

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

	return (
		<Heading as={'h1'} marginBottom={4} fontSize={'4xl'}>
			{heading}
		</Heading>
	)
}

export default GameHeading
