import React from 'react'
import { EditButton } from '../atoms/EditButton'
import { UserInfo } from '../molecles/UserInfo'

interface Props {
  
}

export const PostBox = (props: Props) => {
  return (
    <div>
      <UserInfo/>
      <EditButton/>

    </div>
  )
}
