import React, { useState } from 'react';

interface Props {}

export const Like = (props: Props) => {

  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className='cursor-pointer flex m-1'>
      {isLiked? (<svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 fill-current text-red-500'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>):(<svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4 text-penn-gray'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>)}
      <p className="text-tiny text-penn-gray">1</p>
    </div>
  );
};
