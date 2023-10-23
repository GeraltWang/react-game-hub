import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import apiClient from '../services/api-client'

interface GamesRes {
	count: number
	results: Game[]
}

export interface Game {
	id: number
	name: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
}

export interface Platform {
	id: number
	name: string
	slug: string
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const controller = new AbortController()

		setIsLoading(true)
		apiClient
			.get<GamesRes>('/games', { signal: controller.signal })
			.then(response => {
				setGames(response.data.results)
				setIsLoading(false)
			})
			.catch(error => {
				if (error instanceof CanceledError) return
				setError(error.message)
				setIsLoading(false)
			})

		return () => controller.abort()
	}, [])

	return { games, isLoading, error }
}

export default useGames
