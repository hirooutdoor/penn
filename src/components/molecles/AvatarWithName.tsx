import React from 'react'
import Avatar from '../atoms/Avatar'

interface Props {
  
}

export const AvatarWithName = (props: Props) => {
  return (
    <>
      <div className='flex gap-4'>
        <Avatar/>
        <div className='flex flex-col'>
          <p className='text-sm'>Hiro Arminayuef</p>
          </div>
        </div>
    </>
  )
}
