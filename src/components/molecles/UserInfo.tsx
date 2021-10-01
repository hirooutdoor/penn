import React from 'react'
import Avatar from '../atoms/Avatar'

interface Props {
  
}

export const UserInfo = (props: Props) => {
  return (
    <>
      <div className='flex gap-4 cursor-pointer'>
        <Avatar/>
        <div className='flex flex-col'>
          <p className='text-sm font'>Hiro-Chan</p>
          <div className='flex gap-2'>
            <p className='text-xs text-penn-gray'>2021.09.11</p>
          <p className='text-xs text-penn-gray'>5min</p>
          </div>
        </div>
      </div>
    </>
  )
}
