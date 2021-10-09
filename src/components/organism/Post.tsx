import React from 'react'

type Props = {
  children: React.ReactNode;
}

export const Post = ({children}:Props) => {

  return (
    <ul className='flex flex-col gap-y-6 overflow-y-scroll h-[1000px] no-scrollbar'>
      {children}
    </ul>
  )
}