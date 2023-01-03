import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../store'
import { DoneButton } from './DoneButton'

export const CreateTodo = () => {
  const dispatch = useDispatch()
  const newTodoRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (newTodoRef.current !== null && newTodoRef.current.value.length > 1) {
      dispatch(addTodo(newTodoRef.current.value))
      newTodoRef.current.value = ''
    }
  }

  return (
    <div className='flex items-center gap-4 bg-primary-light dark:bg-primary-dark w-full mb-4 py-3 px-5 rounded-md overflow-hidden shadow-xl'>
      <DoneButton />
      <form className='flex-grow' onSubmit={handleSubmit}>
        <input
          className='w-full text-xs text-primary-dark dark:text-primary-light placeholder:text-xs placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark bg-primary-light dark:bg-primary-dark outline-none'
          type='text'
          ref={newTodoRef}
          placeholder='Let`s create a new todo!'
        />
      </form>
    </div>
  )
}
