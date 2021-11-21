/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';

import FollowButton from '../atoms/FollowButton';
// import Heatmap from '../organism/Heatmap';
import { Filter } from '../organism/Filter';
import FilterItem from '../organism/FilterItem';
import MemoListItem from '../organism/MemoListItem';
import MemoList from '../organism/MemoList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, memoState } from 'src/store/state';
import MenuIcon from '../atoms/MenuIcon';
import { db, auth } from 'src/lib/firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useUpload } from 'src/Hooks/useUpload';

interface Props {}

const UserProfile = (props: Props) => {
  const {
    progress,
    avatarImage,
    setAvatarImage,
    hiddenFileInput,
    handleFileClick,
    handleFileChange,
  } = useUpload();
  const [isEditing, setIsEditing] = useState(false);
  const memos = useRecoilValue(memoState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const user = auth.currentUser;
  const authUserCollectionRef = collection(db, 'users');
  const q = query(authUserCollectionRef, where('uid', '==', user?.uid)); //firestoreのユーザーuidがログインユーザーのuidと一致するものを検索する
  // ログインユーザーのデータをfirestoreから取得
  const getAuthUserInfo = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      console.log(doc.id, ' => ', data);
      const { displayName, description, photoURL } = data;
      setCurrentUser({ displayName: displayName, description: description, photoURL: photoURL });
      setAvatarImage(photoURL);
    });
  };

  useEffect(() => {
    getAuthUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col ml-60'>
      <div className='mt-8 w-[690px] flex gap-8'>
        <div className='flex flex-col gap-2'>
          <img
            className='rounded-full cursor-pointer'
            src={currentUser!.photoURL ? `${avatarImage}` : '/nouser-icon.png'}
            alt='Avatar Image'
            width={100}
            height={100}
          />
          {isEditing && (
            <div onClick={handleFileClick}>
              <div className='absolute top-[66px] left-[403px] text-sm mb-4 text-white dark:text-gray-400 rounded cursor-pointer focus:outline-none focus:ring-penn-green focus:ring-2 focus:ring-opacity-50'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              <button className='absolute top-[140px] left-[390px] text-sm mb-4 text-gray-400 rounded cursor-pointer focus:outline-none focus:ring-penn-green focus:ring-2 focus:ring-opacity-50'>
                変更する
              </button>
            </div>
          )}
          <input
            className='hidden'
            type='file'
            ref={hiddenFileInput}
            onChange={handleFileChange}
            accept='image/*'
          />
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <p className='text-lg font-semibold'>{currentUser.displayName}</p>
          <p className='text-sm text-penn-gray'>100 followings 100 followers</p>
        </div>
        <div className='flex gap-4 mt-4 '>
          <div className='flex gap-4 pt-1 text-penn-gray cursor-pointer'>
            <FaGithub />
            <FaTwitter />
            <FaGlobe />
          </div>
          <FollowButton />
          <div className='mt-14 ml-6 inline-flex rounded-md shadow'>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className='inline-flex items-center justify-center px-2 border border-transparent text-sm font-medium rounded-md text-penn-gray dark:text-penn-darkGray bg-white dark:bg-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-50 cursor-pointer transition-all duration-200'
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className='ml-32'>
        <p>{currentUser.description}</p>
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
          {memos.map((memo, index) => (
            <>
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
              <MemoListItem key={index} />
            </>
          ))}
        </MemoList>
      </div>
    </div>
  );
};

export default UserProfile;
