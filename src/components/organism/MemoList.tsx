import React from 'react'

type Props = {
  children: React.ReactNode;
}

const MemoList = ({children}:Props) => {

  return (
    <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 '>
      {children}
    </ul>
  )
}

export default MemoList;