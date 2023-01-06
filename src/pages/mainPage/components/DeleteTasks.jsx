import { useDispatch } from 'react-redux'
import { deleteTask } from '../../../store'
import { IoClose } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'

export const DeleteTasks = ({ id }) => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  const navigate = useNavigate()

  function onDelete () {
    dispatch(deleteTask(id))
    if (state === id) {
      navigate('/')
    }
  }
  return (
    <button
      className='opacity-100 lg:opacity-40 hover:opacity-100'
      type='button'
      onClick={onDelete}
    >
      <IoClose className='fill-c-text text-2xl hover:fill-red-500' />
    </button>
  )
}
