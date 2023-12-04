import { create } from 'zustand'

export interface GameQuery {
	genreId?: number
	platformId?: number
	sortOrder?: string
	search?: string
}

interface GameQueryStore {
	gameQuery: GameQuery
	setSearchText: (search: string) => void
	setSortOrder: (sortOrder: string) => void
	setGenreId: (genreId: number) => void
	setPlatformId: (platformId: number) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
	gameQuery: {},
	setSearchText: (search: string) => set(() => ({ gameQuery: { search } })),
	setSortOrder: (sortOrder: string) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
	setGenreId: (genreId: number) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
	setPlatformId: (platformId: number) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
}))

export default useGameQueryStore
