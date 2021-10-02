import React from 'react';
import MenuIcon from '../atoms/MenuIcon';
import ToggleSwitcher from '../atoms/ToggleSwitcher';
import { AvatarWithName } from '../molecles/AvatarWithName';
import PostedCard from '../molecles/PostedCard';

interface Props {}

const RightContent = (props: Props) => {
  return (
    <div className=' mx-6 flex flex-col mt-48 gap-6 border rounded-lg w-[280px] h-[100%] p-8'>
      <AvatarWithName />
      <p className='text-penn-gray'>コメントを許可</p>
      <ToggleSwitcher />
      <div className='flex gap-2'>
        <h2>まとめた記事</h2>
        <MenuIcon>
          <path
            className='text-gray-300'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
          />
        </MenuIcon>
      </div>
      <div className="grid grid-col-2 gap-8">
      <PostedCard/>
      <PostedCard/>
      </div>
      <div className='flex gap-2'>
        <h2>参考記事</h2>
        <MenuIcon>
          <path
            className='text-gray-300'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
          />
        </MenuIcon>
      </div>
      <div className="grid grid-col-2 gap-8">
      <PostedCard/>
      <PostedCard/>
      </div>
    </div>
  );
};

export default RightContent;
