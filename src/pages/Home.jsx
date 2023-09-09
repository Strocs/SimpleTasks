import {
  Pomodoro,
  TaskGroups,
  TasksPanel,
  AddTask,
  Radio,
  ProfileButton,
  NowPlaying,
  GithubButton,
  WelcomeName
} from '@components/home'
import { Header, Footer, Title } from '@components/ui'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const Home = () => {
  return (
    <>
      <Header>
        <div className='grid gap-1'>
          <Title />
          <WelcomeName />
        </div>
        <Pomodoro />
      </Header>
      <main className='grid grid-rows-[auto_auto_1fr] gap-3 max-w-xl w-full'>
        <AddTask />
        <TaskGroups />
        <TasksPanel />
        <section className='pb-1 px-3 grid w-full grid-cols-[1fr_2fr_1fr] items-center'>
          <ProfileButton />
          <Radio />
          <GithubButton />
        </section>
      </main>
      <Footer>
        <NowPlaying />
      </Footer>
    </>
  )
}
