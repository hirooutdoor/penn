import React from 'react'
import { PostItem } from '../organism/PostItem'


interface Props {
  
}

export const Feed = (props: Props) => {
  return (
    <div className='flex flex-col justify-center my-6 align-middle text-center gap-y-4'>
      <PostItem />
    </div>
  )
}
