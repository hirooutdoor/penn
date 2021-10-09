// penn.jp/articles/[articleId]
import type { NextPage } from 'next';
import Image from 'next/image';

import { UserInfo } from 'src/components/molecles/UserInfo';
import FollowButton from 'src/components/atoms/FollowButton';
import PostContents from 'src/components/templates/PostContents';
import DarkModeSwitch from 'src/components/molecles/DarkModeSwitch';

const Articles: NextPage = () => {
  return (
    <>
      <div className='container px-[22rem] font-Poppins flex flex-col place-items-center'>
        <Image
          className='rounded-b-xl flex-shrink'
          src='https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
          alt='Avatar Image'
          width={500}
          height={300}
          layout='fixed'
        />
        <h1 className='text-xl my-6' >魅力的なエンジニアの要素とは？</h1>
        <div className='flex justify-start gap-20'>
          <UserInfo/>
          <FollowButton/>
          <DarkModeSwitch />
        </div>
        <PostContents/>
      </div>
    </>
  );
};

export default Articles;
