import { Pomodoro, TaskGroups, TasksPanel, Radio, ProfileButton } from '@components/home'
import { Header } from '@ui'

export const Home = () => {
	return (
		<>
			<Header renderOnRight={<Pomodoro />} />
			<main className='h-full flex flex-col'>
				<TaskGroups />
				{/* TasksPanel change content between each group selected */}
				<TasksPanel />
			</main>
			<Radio renderOnLeft={<ProfileButton />} />
		</>
	)
}