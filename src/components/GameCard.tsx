import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
	game: Game
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} loading={'lazy'}></Image>
			<CardBody>
				<HStack justifyContent={'space-between'}>
					<PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)}></PlatformIconList>
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
				<Heading fontSize={'2xl'}>{game.name}</Heading>
				<Emoji rating={game.rating_top}></Emoji>
			</CardBody>
		</Card>
	)
}

export default GameCard
