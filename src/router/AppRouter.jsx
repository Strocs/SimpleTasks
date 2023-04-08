import { Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage } from '@pages'
import { Header } from '@components'

export function AppRouter() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<TasksPage />} />
				{/* <Route path='/profile' element={<ProfilePage />} /> */}
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
		</>
	)
}
