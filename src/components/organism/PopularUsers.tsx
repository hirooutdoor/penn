import React from 'react'
import { FollowButotn } from '../atoms/FollowButotn'
import { AvatarWithName } from '../molecles/AvatarWithName'

interface Props {
  
}

export const PopularUsers = (props: Props) => {
  return (
    <>
    <div className='my-4'>
      <p>おすすめのユーザー</p>
    </div>
    <div className='flex flex-col border dark:border-penn-gray rounded-lg p-4 gap-2 divide-y dark:divide-gray-500'>
      <div className='flex gap-4'>
      <AvatarWithName/>
      <FollowButotn/>
      </div>
      <div className='flex gap-4 pt-2'>
      <AvatarWithName/>
      <FollowButotn/>
      </div>
      <div className='flex gap-4 pt-2'>
      <AvatarWithName/>
      <FollowButotn/>
      </div>
      <div className='flex gap-4 pt-2'>
      <AvatarWithName/>
      <FollowButotn/>
      </div>
      </div>
    </>
  )
}
