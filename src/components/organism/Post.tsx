import React from 'react'

type Props = {
  children: React.ReactNode;
}

export const Post = ({children}:Props) => {

  return (
    <ul className='flex flex-col justify-center my-6 align-middle text-center gap-y-6'>
      {children}
    </ul>
  )
}