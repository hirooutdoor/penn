import React from 'react';
import Image from 'next/image';

import { FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';

import MenuIcon from '../atoms/MenuIcon';
import FollowButton from '../atoms/FollowButton';

interface Props {}

const UserProfile = (props: Props) => {
  return (
    <div className='flex flex-col ml-60'>
      <div className='ml mt-8 w-[690px] flex gap-8'>
        <Image
          className='rounded-full cursor-pointer'
          src='/avatar.png'
          alt='Avatar Image'
          width={100}
          height={100}
          layout='fixed'
        />
        <div className='flex flex-col gap-4 mt-4'>
          <p className='text-lg font-semibold'>Hiro-chan</p>
          <p className='text-sm text-penn-gray'>100 followings 100 followers</p>
        </div>
        <div className='flex gap-4 mt-4 cursor-pointer'>
          <div className='flex gap-4 pt-1 text-penn-gray'>
            <FaGithub />
            <FaTwitter />
            <FaGlobe />
          </div>
          <FollowButton />
        </div>
      </div>
      <div className='ml-32'>
        <p>
          フロントエンドエンジニア。pennを開発してます。
          <br />
          好きな食べ物はプリンです。
        </p>
      </div>
      <div className='ml-32 mt-6'>
        <p className='text-sm text-penn-gray'>120 memos in 2021</p>
        
      </div>
    </div>
  );
};

export default UserProfile;
