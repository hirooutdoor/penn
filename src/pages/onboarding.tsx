import React, { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

const Onboarding: NextPage = () => {
  const [isNext, setIsNext] = useState(false);

  const handleIsNext = () => {
    setIsNext(!isNext);
  };

  return (
    <div className=' p-5'>
      {!isNext ? (
        <div className='animate-fade-in-up text-center'>
          <h1 className='text-4xl font-bold text-penn-dark cursor-default'>Welcome to Penn!</h1>
          <Image src='/welcome.svg' alt='onboard image' height={350} width={350} />
          <h2 className='text-2xl mb-4 text-penn-dark font-semibold cursor-default'>
            What is your name?
          </h2>
          <form className='mb-4' action='submit'>
            <input
              className='w-60 p-2 outline-none border-b transition-all duration-500 focus:outline-none focus:border-penn-green focus:border-b-2 focus:border-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
              type='text'
              placeholder='ニックネーム（例: Penn太郎）'
            />
          </form>
          <form className='mb-10' action='submit'>
            <div className='flex justify-center'>
              <p className='z-10 pt-2  text-penn-gray'>@</p>
              <input
                className='-ml-4 pl-4 w-64 p-2 outline-none border-b transition-all duration-500 focus:outline-none focus:border-penn-green focus:border-b-2 focus:border-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
                type='text'
                placeholder='ユーザー名（例: @penn_taro）'
              />
            </div>
          </form>
          <p className='' hidden>
            ユーザー名には半角英数字とアンダースコア（_）のみ使用できます
          </p>
          <div className='flex justify-center gap-10'>
            <button className='text-gray-400 transition-all duration-500 hover:text-penn-gray outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-30 rounded-md'>
              登録を中断する
            </button>
            <button
              className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md transition-all duration-500 text-white bg-penn-green hover:bg-penn-darkGreen outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-50'
              onClick={handleIsNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className='animate-fade-in-down'>
          <button
            className='text-gray-400 transition-all duration-500 ml-6 hover:text-penn-gray outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-30 rounded-md'
            onClick={handleIsNext}
          >
            ← Go back
          </button>
          <div className='text-center'>
            <h1 className='text-4xl my-4 font-bold text-penn-dark cursor-default'>
              Setup your profile
            </h1>
            <Image
              className='rounded-full cursor-pointer'
              src='/avatar.png'
              alt='Avatar Image'
              width={100}
              height={100}
              layout='fixed'
            />
            <form action='submit'>
              <label className='text-sm mb-4 text-gray-400 cursor-pointer' htmlFor='avatar-image'>
                変更する
              </label>
              <input className='hidden' id='avatar-image' type='file' />
            </form>
            <form className='' action=''>
              <textarea
                className='bg-gray-100 rounded-md border border-gray-100 leading-normal resize-none w-96 h-40 py-2 px-3 my-8 font-medium outline-none transition-all duration-500 focus:outline-none focus:ring-penn-green focus:ring-2 focus:ring-opacity-50 placeholder-gray-400 focus:placeholder-gray-300 placeholder-opacity-75'
                name='body'
                placeholder='自己紹介'
                maxLength={180}
                required
              ></textarea>
            </form>
            <div className='flex justify-center gap-10'>
              <button className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md transition-all duration-500 text-white bg-penn-green hover:bg-penn-darkGreen outline-none focus:ring-2 focus:ring-penn-green focus:ring-opacity-50'>
                Pennをはじめる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
