import React from 'react'

type Props = {
  children: React.ReactNode;
}

const MemoList = ({children}:Props) => {

  return (
    <ul className='grid md:grid-cols-3 sm:grid-cols-2 gap-6'>
      {children}
    </ul>
  )
}

export default MemoList;