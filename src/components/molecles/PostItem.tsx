import React, { useState } from 'react';
import Image from 'next/image'
import { EditButton } from '../atoms/EditButton';
import { UserInfo } from './UserInfo';

interface Props {}

export const PostItem = (props: Props) => {
  const [ articles, setAriticles ] = useState({})

  return (
    <>
      <div className='flex flex-col border rounded-lg p-4'>
        <UserInfo />
        <EditButton />
      </div>
      <div className='flex flex-col border rounded-lg p-4'>
        <UserInfo />
        <EditButton />
      </div>
      <div className='flex flex-col border rounded-lg p-4'>
        <UserInfo />
        <EditButton />
      </div>
    </>
  );
};
