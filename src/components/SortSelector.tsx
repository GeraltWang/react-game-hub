import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  sortOrder: string
  onSelectSortOrder: (sort: string) => void
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
	const sortOrders = [
		{ label: 'Relevance', value: '' },
		{ label: 'Date Added', value: '-added' },
		{ label: 'Name', value: 'name' },
		{ label: 'Release Date', value: '-released' },
		{ label: 'Popularity', value: '-metacritic' },
		{ label: 'Average Rating', value: '-rating' },
	]

  const currentSortOrder = () => sortOrders.find(sort => sort.value === sortOrder)?.label || 'Relevance'

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order By: {currentSortOrder()}
			</MenuButton>
			<MenuList>
				{sortOrders.map(sort => (
					<MenuItem key={sort.value} onClick={() => {onSelectSortOrder(sort.value)}}>{sort.label}</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default SortSelector
