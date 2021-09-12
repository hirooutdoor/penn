import React from 'react';
import { Comment } from '../atoms/Comment';
import { Like } from '../atoms/Like';
import { Tag } from '../atoms/Tag';
import { UserInfo } from '../molecles/UserInfo';

interface Props {}

export const PopularPostItem = (props: Props) => {
  return (
    <>
      <div className='mx-2 my-2 pt-2'>
        <div className='flex flex-col gap-1 my-1 flex-grow'>
          <UserInfo />
          <h2 className='text-left text-md '>魅力的なエンジニアの要素とは？</h2>
        </div>
        <div className='flex gap-2'>
          <Like />
          <Comment />
          <Tag>キャリア</Tag>
        </div>
      </div>
    </>
  );
};
