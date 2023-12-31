import { createBrowserRouter } from 'react-router-dom'
import GameDetailPage from './pages/GameDetailPage'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout></Layout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				element: <HomePage></HomePage>,
			},
			{
				path: 'game/:slug',
				element: <GameDetailPage></GameDetailPage>,
			},
		],
	},
])

export default router
