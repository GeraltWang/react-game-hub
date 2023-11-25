import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'

interface Props {
	onSelectPlatformId: (platformId: number) => void
	selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatformId, selectedPlatformId }: Props) => {
	const { data: platforms, error } = usePlatforms()

	const platform = usePlatform(selectedPlatformId)

	if (error) return null

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || 'All Platforms'}
			</MenuButton>
			<MenuList>
				{platforms?.map(platform => (
					<MenuItem onClick={() => onSelectPlatformId(platform.id)} key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector
