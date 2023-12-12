import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import useGameQueryStore from '../store'

const SearchInput = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const setSearchText = useGameQueryStore(s => s.setSearchText)

	const navigate = useNavigate()

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (inputRef.current) {
					setSearchText(inputRef.current.value)
					navigate('/')
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} pointerEvents='none'></InputLeftElement>
				<Input ref={inputRef} borderRadius={20} variant='filled' placeholder='Search Games'></Input>
			</InputGroup>
		</form>
	)
}

export default SearchInput
