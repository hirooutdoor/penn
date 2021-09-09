import React from 'react'

interface Props {
  
}

export const TagBox = (props: Props) => {
  return (
    <>
    <p>おすすめのトピック</p>
      <div className='flex flex-row gap-2 border rounded-lg p-4 my-4'>
        <p>tag</p>
        <p>tag</p>
        <p>tag</p>
      </div>
    </>
  )
}
