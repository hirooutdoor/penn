import React from 'react';
import Image from 'next/image'
import { EditButton } from '../atoms/EditButton';
import { UserInfo } from '../molecles/UserInfo';

interface Props {}

export const PostItem = (props: Props) => {
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
