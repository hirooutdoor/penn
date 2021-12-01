import React from 'react';
import { useRecoilValue } from 'recoil';
import { buttonState } from 'src/store/state';

interface Props {
  isOpen: boolean;
}

const OpenButton = ({ isOpen }: Props) => {
  return (
    <>
      {isOpen ? (
        <div className='text-xs inline-flex leading-sm px-3  border  border-penn-green border-opacity-50 text-penn-green dark:text-penn-lightGreen dark:bg-penn-green dark:bg-opacity-20 dark:border-opacity-100 rounded-full w-14'>
          <button type='button'>Open</button>
        </div>
      ) : (
        <div className='text-xs inline-flex leading-sm px-3 border border-red-400 border-opacity-50 text-red-400 dark:border-red-700 dark:text-red-500 dark:bg-red-500 dark:bg-opacity-20 rounded-full w-20'>
          <button type='button' className='inline-flex items-center '>
            <span>Closed</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 ml-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
export default OpenButton;
