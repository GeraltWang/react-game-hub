import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import apiClient from '../services/api-client'

interface GenreRes {
	count: number
	results: Genre[]
}

interface Genre {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

const useGenres = () => {
  const [genres , setGenres] = useState<Genre[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const controller = new AbortController()

		setIsLoading(true)
		apiClient
			.get<GenreRes>('/genres', { signal: controller.signal })
			.then(response => {
				setGenres(response.data.results)
				setIsLoading(false)
			})
			.catch(error => {
				if (error instanceof CanceledError) return
				setError(error.message)
				setIsLoading(false)
			})

		return () => controller.abort()
	}, [])

	return { genres, isLoading, error }
}

export default useGenres