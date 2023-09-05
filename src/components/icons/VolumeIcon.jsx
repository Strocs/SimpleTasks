export const volumeIcon = ({ size = '20' }) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox='0 0 21 21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        fill='currentColor'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(3 2)'
      >
        <path d='m1.5 5.5h3l5-5v16l-5-5h-3c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1zm10 8c1.3333333-1 2-2.6666667 2-5 0-2.33333333-.6666667-4-2-5' />
        <path d='m11.5 6.5v4' />
      </g>
    </svg>
  )
}