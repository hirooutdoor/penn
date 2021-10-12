import Image from 'next/image';
import React, { useState } from 'react';
import DarkModeSwitch from '../molecles/DarkModeSwitch';
import Logo from 'src/components/molecles/Logo';

interface Props {}

export const Header = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='container fixed border-b dark:border-b-penn-gray flex justify-end gap-8 py-6 mb-6 h-30 bg-white dark:bg-black z-10'>
      {/* <Logo /> */}
      <div className='flex gap-4 mr-20'>
        {!isLoggedIn ? (
          <>
            {/*             
            <button type='button' className='text-gray-400 hover:text-penn-green pt-1'>
              <span className='sr-only'>Search</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>

            <DarkModeSwitch />

            <button type='button' className='text-gray-400 hover:text-penn-green pt-1'>
              <span className='sr-only'>View notifications</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>


            <div className='relative'>
              <button
                type='button'
                className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-penn-green focus:ring-white'
                id='user-menu-button'
                aria-expanded='false'
                aria-haspopup='true'
              >
                <span className='sr-only'>Open user menu</span>
                <Image
                  className='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt=''
                  width={30}
                  height={30}
                />
              </button>
            </div> */}
          </>
        ) : (
          <>
            {/* Login Button*/}
            <button type='button' className='text-penn-gray p-1 text-xs rounded-md'>
              Login
            </button>

            {/* Signup Button */}
            <button
              type='button'
              className='text-white bg-penn-green py-2 px-3 text-xs rounded-lg uppercase'
            >
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
};
