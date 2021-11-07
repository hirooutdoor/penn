import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

const Onboarding: NextPage = () => {
  return (
    <div className='text-center p-5'>
      <h1 className='text-4xl font-bold text-penn-dark'>Welcome to Penn!</h1>
      <Image src='/welcome.svg' alt='onboard image' height={350} width={350} />
      <h2 className='text-2xl mb-4 text-penn-dark font-semibold'>What is your name?</h2>
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
        <button className='text-gray-400 transition-all duration-500 hover:text-penn-gray'>
          登録を中断する
        </button>
        <button className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md transition-all duration-500 text-white bg-penn-green hover:bg-penn-darkGreen'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
