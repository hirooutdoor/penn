import React from 'react';
import { useRecoilValue } from 'recoil';
import { buttonState } from 'src/store/state';

interface Props {}

const CloseButton = (props: Props) => {
  const isOpen = useRecoilValue(buttonState);

  return (
    <>
      {isOpen ? (
        <div className='text-xs inline-flex leading-sm px-3 py-1 border border-penn-gray text-penn-gray rounded-full w-20'>
          <button type='button' className='inline-flex items-center '>
            <span>Close</span>
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
      ) : (
        <div className='text-xs inline-flex leading-sm px-3 py-1 border  border-penn-green text-penn-green dark:bg-penn-green dark:bg-opacity-10 dark:text-penn-lightGreen rounded-full w-18'>
          <button type='button'>ReOpen</button>
        </div>
      )}
    </>
  );
};
export default CloseButton;
