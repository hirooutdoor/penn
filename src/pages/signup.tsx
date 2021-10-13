import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const signin = (props: Props) => {
  return (
    <div className='flex items-center min-h-screen px-4 py-2 bg-contain bg-login-pattern lg:justify-center '>
      <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md'>
        <div className='p-4 py-4 text-white bg-penn-green md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
          <Image src='/explore.svg' alt='explore' height={250} width={250} />
          <p className='mt-6 font-normal text-center text-gray-100 md:mt-0'>
            今日から始まる新たな冒険。
            <br />
            開発者として、楽しくアウトプットを
            <br />
            続けていきましょう。
          </p>
          <p className='flex flex-col items-center justify-center mt-10 text-center'>
            <span>{`Already have an account?`}</span>
            <Link href='/login'>
              <a className='underline'>ログイン</a>
            </Link>
          </p>
          <p className='mt-6 text-sm text-center text-gray-300'>
            Read our{' '}
            <a href='#' className='underline'>
              terms
            </a>{' '}
            and{' '}
            <a href='#' className='underline'>
              conditions
            </a>
          </p>
        </div>
        <div className='p-8 md:flex-1 flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row lg:max-w-screen-md '>
          <div className='flex justify-center my-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7 text-penn-green m-1'
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
            <p className='text-penn-dark dark:text-penn-light font-Ubuntu font-bold text-2xl '>
              penn
            </p>
          </div>
          <form action='#' className='flex flex-col space-y-5'>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='name' className='text-sm font-semibold text-gray-500'>
                User name
              </label>
              <div className='flex'>
                <i className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-400 text-opacity-75'>
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
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </i>
                <input
                  type='text'
                  id='name'
                  placeholder='penn-san'
                  autoFocus
                  required
                  className='-ml-10 pl-10 w-full px-4 py-1 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-400 placeholder-opacity-75'
                />
              </div>
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor='email' className='text-sm font-semibold C'>
                Email address
              </label>
              <div className='flex'>
                <i className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-400 text-opacity-75'>
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
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </i>
                <input
                  type='email'
                  id='email'
                  placeholder='123abc@example.com'
                  autoFocus
                  required
                  className='-ml-10 pl-10 w-full px-4 py-1 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-400 placeholder-opacity-75'
                />
              </div>
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='flex'>
                <label htmlFor='password' className='text-sm font-semibold text-gray-500'>
                  Password
                </label>
                <p className='text-sm ml-2 text-penn-light'>8文字以上の英数字</p>
              </div>
              <div className='flex'>
                <i className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-400 text-opacity-75'>
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
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    />
                  </svg>
                </i>
                <input
                  type='password'
                  id='password'
                  required
                  placeholder='********'
                  autoComplete='new-password'
                  min={8}
                  className='-ml-10 pl-10 w-full px-4 py-1 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-400 placeholder-opacity-75'
                />
              </div>
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='flex'>
                <label htmlFor='password-confirm' className='text-sm font-semibold text-gray-500'>
                  Confirm Password
                </label>
              </div>
              <div className='flex'>
                <i className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-400 text-opacity-75'>
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
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    />
                  </svg>
                </i>
                <input
                  type='password'
                  id='password-confirm'
                  name='password-confirm'
                  required
                  placeholder='********'
                  autoComplete='new-password'
                  min={8}
                  className='-ml-10 pl-10 w-full px-4 py-1 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-400 placeholder-opacity-75'
                />
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                id='remember'
                className='w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200'
              />
              <label htmlFor='remember' className='text-sm font-semibold text-gray-500'>
                Remember me
              </label>
            </div>
            <div>
              <button
                type='submit'
                className='w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-penn-green rounded-md shadow hover:bg-penn-darkGreen focus:outline-none focus:ring-blue-200 focus:ring-4'
              >
                Sign up
              </button>
            </div>
            <div className='flex flex-col space-y-5'>
              <span className='flex items-center justify-center space-x-2'>
                <span className='h-px bg-gray-400 w-14'></span>
                <span className='font-normal text-gray-500'>or sign up with</span>
                <span className='h-px bg-gray-400 w-14'></span>
              </span>
              <div className='flex flex-col space-y-4'>
                <a
                  href='#'
                  className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-300 rounded-md group hover:bg-red-400 hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-200'
                >
                  <span className='flex items-center'>
                    <Image alt='google icon' src='/google-icon.svg' height={18} width={18} />
                  </span>
                  <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                    google
                  </span>
                </a>
                <a
                  href='#'
                  className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-300 rounded-md group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-200'
                >
                  <span>
                    <svg
                      className='w-5 h-5 text-gray-800 fill-current group-hover:text-white'
                      viewBox='0 0 16 16'
                      version='1.1'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
                      ></path>
                    </svg>
                  </span>
                  <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                    Github
                  </span>
                </a>
                <a
                  href='#'
                  className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border dark:border-blue-500 border-gray-300 rounded-md group hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-200'
                >
                  <span>
                    <svg
                      className='text-blue-500 group-hover:text-white'
                      width='20'
                      height='20'
                      fill='currentColor'
                    >
                      <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'></path>
                    </svg>
                  </span>
                  <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signin;
