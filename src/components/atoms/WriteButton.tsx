import React from 'react'

interface Props {
  
}

const WriteButton = (props: Props) => {
  return (
    <>
      <div className='text-md text-center leading-sm px-6 py-1 mt-4 bg-penn-green dark:hover:bg-penn-darkGreen  text-white rounded-md'>
        <button type='button'>Write</button>
      </div>
    </>
  )
}

export default WriteButton;

