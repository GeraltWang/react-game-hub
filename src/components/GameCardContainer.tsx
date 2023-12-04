import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Prop {
	children: ReactNode
}

const GameCardContainer = ({ children }: Prop) => {
	return (
		<Box
			borderRadius={10}
			overflow={'hidden'}
			transition={'transform 0.15s ease-in'}
			_hover={{
				transform: 'scale(1.03)',
			}}
		>
			{children}
		</Box>
	)
}

export default GameCardContainer
