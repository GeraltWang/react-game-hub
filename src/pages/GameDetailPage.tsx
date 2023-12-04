import { Spinner, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGameDetail from '../hooks/useGameDetail'

const GameDetailPage = () => {
	const { slug } = useParams()
	const { data: game, isLoading, error } = useGameDetail(slug!)

	if (isLoading) return <Spinner />

	if (error || !game) throw error

	return (
		<>
			<Heading>{game.name}</Heading>
			<Text>{game.description_raw}</Text>
		</>
	)
}

export default GameDetailPage
