import { Button } from '@components/ui'

export const SkeletonGroups = () => {
  return (
    <ul className='flex items-center gap-3 h-fit pr-1 pl-[10px] py-1'>
      <li>
        <Button
          color={'blue'}
          outline={'white'}
          hover='blue'
          className='flex items-center gap-1 whitespace-nowrap shrink-0'
        >
          <p className='font-normal px-3'>All</p>
        </Button>
      </li>
      <li className='h-6 w-24 rounded-full outline outline-2 outline-opacityGrey bg-opacityGrey'></li>
      <li className='h-6 w-12 rounded-full outline outline-2 outline-opacityGrey bg-opacityGrey'></li>
      <li className='h-6 w-16 rounded-full outline outline-2 outline-opacityGrey bg-opacityGrey'></li>
    </ul>
  )
}
