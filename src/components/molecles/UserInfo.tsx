import React from 'react'
import Avatar from '../atoms/Avatar'

interface Props {
  
}

export const UserInfo = (props: Props) => {
  return (
    <>
      <Avatar/>
      <p>User Name</p>
      <p>Post time</p>
      <p>TIme to read</p>
    </>
  )
}
