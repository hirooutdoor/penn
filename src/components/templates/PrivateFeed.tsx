import React from 'react';
import { useRecoilValue } from 'recoil';
import { articleState } from 'src/store/articleGlobalState';
import { PostItem } from '../organism/PostItem';
import { Post } from '../organism/Post';

import MenuIcon from '../atoms/MenuIcon';
import OpenButton from '../atoms/OpenButton';
import { Tag } from '../atoms/Tag';

const PublicFeed = () => {
  const articles = useRecoilValue(articleState);

  return (
    <div className='flex flex-col ml-60 gap-4'>
      <div className='text-lg font-bold mt-10'>
        <div className='flex gap-2'>
          <h1>React Hooksのお勉強</h1>
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
      </div>
      <OpenButton/>
      <div className="flex gap-4">
      <Tag>React</Tag>
      <Tag>JavaScript</Tag>
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
      <Post>
        {articles.map((article) => (
          <>
            <PostItem key={article.id} />
            <PostItem key={article.id} />
            <PostItem key={article.id} />
          </>
        ))}
      </Post>
    </div>
  );
};

export default PublicFeed;
