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
}

export interface Platform {
	id: number
	name: string
	slug: string
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')

	useEffect(() => {
		const controller = new AbortController()

		apiClient
			.get<GamesRes>('/games', { signal: controller.signal })
			.then(response => {
				setGames(response.data.results)
			})
			.catch(error => {
				if (error instanceof CanceledError) return
				setError(error.message)
			})

		return () => controller.abort()
	}, [])

	return { games, error }
}

export default useGames
