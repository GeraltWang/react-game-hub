import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
	return (
		<HStack padding={2}>
			<Link
				to={'/'}
				style={{
					flexShrink: 0,
				}}
			>
				<Image src={logo} boxSize={'60px'} objectFit={'cover'}></Image>
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
