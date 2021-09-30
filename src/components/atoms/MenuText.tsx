import React from 'react'

interface Props {
  children: React.ReactNode
}

const MenuText = ({children}: Props) => {
  return (
      <p className='text-md text-penn-gray '>{children}</p>
  )
}

export default MenuText
