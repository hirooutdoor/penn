import React from 'react'

interface Props {
  
}

const WriteButton = (props: Props) => {
  return (
    <>
      <div className='cursor-pointer text-md text-center leading-sm px-6 py-1 mt-4 bg-penn-green dark:hover:bg-penn-darkGreen  text-white rounded-md hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105'>
        <button type='button'>Write</button>
      </div>
    </>
  )
}

export default WriteButton;

