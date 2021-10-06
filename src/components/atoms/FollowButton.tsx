import React from 'react';

interface Props {}

const FollowButton = (props: Props) => {
  return (
    <div>
      <button
        type='button'
        className='text-xs flex leading-sm px-3 py-1  bg-green-50 dark:bg-green-100 text-penn-green rounded-full'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
        <span className='ml-1'>Follow</span>
      </button>
    </div>
  );
};

export default FollowButton;