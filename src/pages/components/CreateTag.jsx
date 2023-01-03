import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTag } from '../../store'

export const CreateTag = ({ id }) => {
  const tagRef = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (tagRef.current !== null && tagRef.current.value.length > 1) {
      dispatch(addTag({id, tag: tagRef.current.value}))
      tagRef.current.value = ''
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-fit text-[.7rem] leading-none overflow-hidden'
    >
      <input
        placeholder='&#43;'
        className='h-full w-12 bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light outline-none rounded placeholder:text-[.7rem] '
        type='text'
        ref={tagRef}
      />
    </form>
  )
}
