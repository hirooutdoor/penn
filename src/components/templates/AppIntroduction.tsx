import React from 'react';
import Image from 'next/image';

import { useRecoilValue } from 'recoil';
import { articleState } from 'src/store/articleGlobalState';

const AppIntroduction = () => {
  const articles = useRecoilValue(articleState);

  return (
    <>
      <div className='flex flex-col ml-48 mt-40'>
        {/* Top */}
        <div className='bg-white dark:bg-black'>
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
            <div className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              <span className='block dark:text-penn-light'>準備はできる前でOK。</span>
              <span className='block text-penn-green'>小さくアウトプットをはじめよう。</span>
              <div className=' flex lg:mt-0 lg:flex-shrink-0'>
                <div className='mt-10 inline-flex rounded-md shadow'>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-penn-green hover:bg-green-600'
                  >
                    はじめる
                  </a>
                </div>
                <div className='mt-10 ml-3 inline-flex rounded-md shadow'>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-penn-green dark:text-white bg-white dark:bg-gray-400 hover:bg-indigo-50'
                  >
                    もっと読む
                  </a>
                </div>
              </div>
            </div>
            <Image src='/hero.svg' alt='Top Image' width={400} height={400} />
          </div>
        </div>
        {/* Body */}
        <div className='flex justify-start gap-4'>
          <div className='py-12 bg-gray-50 dark:bg-penn-dark'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='lg:text-center'>
                <h2 className='text-base text-penn-green font-semibold tracking-wide uppercase'>
                  start from Small step.
                </h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  エンジニアのための発信の場
                </p>
                <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
                  cupiditate veritatis in accusamus quisquam.
                </p>
              </div>

              <div className='mt-10'>
                <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
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
                            d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                          />
                        </svg>
                      </div>
                      <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                        Competitive exchange rates
                      </p>
                    </dt>
                    <dd className='mt-2 ml-16 text-base text-gray-500'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                      perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                  </div>

                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
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
                            d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                          />
                        </svg>
                      </div>
                      <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                        No hidden fees
                      </p>
                    </dt>
                    <dd className='mt-2 ml-16 text-base text-gray-500'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                      perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                  </div>

                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
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
                            d='M13 10V3L4 14h7v7l9-11h-7z'
                          />
                        </svg>
                      </div>
                      <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                        Transfers are instant
                      </p>
                    </dt>
                    <dd className='mt-2 ml-16 text-base text-gray-500'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                      perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                  </div>

                  <div className='relative'>
                    <dt>
                      <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
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
                            d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                          />
                        </svg>
                      </div>
                      <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                        Mobile notifications
                      </p>
                    </dt>
                    <dd className='mt-2 ml-16 text-base text-gray-500'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                      perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppIntroduction;
