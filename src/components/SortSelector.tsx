import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'

const SortSelector = () => {
	const sortOrders = [
		{ label: 'Relevance', value: '' },
		{ label: 'Date Added', value: '-added' },
		{ label: 'Name', value: 'name' },
		{ label: 'Release Date', value: '-released' },
		{ label: 'Popularity', value: '-metacritic' },
		{ label: 'Average Rating', value: '-rating' },
	]

	const currentSortOrder = () => sortOrders.find(sort => sort.value === sortOrder)?.label || 'Relevance'

	const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
	const setSortOrder = useGameQueryStore(s => s.setSortOrder)
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order By: {currentSortOrder()}
			</MenuButton>
			<MenuList>
				{sortOrders.map(sort => (
					<MenuItem
						key={sort.value}
						onClick={() => {
							setSortOrder(sort.value)
						}}
					>
						{sort.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default SortSelector
