import React from 'react';
import Image from 'next/image';

import { FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';

import FollowButton from '../atoms/FollowButton';
// import Heatmap from '../organism/Heatmap';
import { Filter } from '../organism/Filter';
import FilterItem from '../organism/FilterItem';
import MemoListItem from '../organism/MemoListItem';
import MemoList from '../organism/MemoList';
import { useRecoilValue } from 'recoil';
import { memoState } from 'src/store/state';
import MenuIcon from '../atoms/MenuIcon';

interface Props {}

const UserProfile = (props: Props) => {
  const memos = useRecoilValue(memoState);
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
      <div className='ml-8 mt-6 flex flex-col gap-2'>
        {/* TODO Heatmapの実装 */}
        {/* <p className='text-sm text-penn-gray'>120 memos in 2021</p>
        <div className='flex gap-4'>
          <Heatmap />
          <div className='flex flex-col text-xs mt-2 gap-1 cursor-pointer'>
            <p className='rounded-md font-semibold'>2021</p>
            <p>2020</p>
            <p>2019</p>
          </div>
        </div> */}
        <Filter>
          <div className='ml-16 flex gap-10'>
            <FilterItem isActive>📝 Memo</FilterItem>
            <FilterItem isActive={false}>🏷 Issue</FilterItem>
            <FilterItem isActive={false}>💬 Comment</FilterItem>
          </div>
        </Filter>
        <div className='border-t-2 border-opacity-50 pt-8 flex justify-between'>
          <h2 className='font-bold text-xl'>Memo</h2>
          <div className='flex'>
            <MenuIcon>
              <path
                className='text-gray-400 '
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </MenuIcon>
            <p className='text-penn-gray ml-2'>Search</p>
          </div>
        </div>

        <MemoList>
          {memos.map((memo) => (
            <>
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
              <MemoListItem key={memo.id} />
            </>
          ))}
        </MemoList>
      </div>
    </div>
  );
};

export default UserProfile;
