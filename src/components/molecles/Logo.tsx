import React from 'react';
import Link from 'next/link';

interface Props {}

const Logo = (props: Props) => {
  return (
    <Link href='/' passHref>
      <div className='flex cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-penn-green m-1'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
          />
        </svg>
        <p className='text-penn-dark dark:text-penn-light font-Ubuntu font-bold text-xl'>penn</p>
      </div>
    </Link>
  );
};

export default Logo;
