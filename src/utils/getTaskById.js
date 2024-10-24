import { useTaskStore } from '@context/useTaskStore'

export const getTaskById = ({ group, id }) => {
  const taskData = useTaskStore(state => state.taskData)
  return taskData[group].find(task => task.id === id)
}
