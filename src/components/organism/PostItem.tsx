import React, { useState } from 'react';
import { UserInfo } from '../molecles/UserInfo';
import { articleState } from 'src/store/articleGlobalState';
import { useRecoilValue } from 'recoil';
import { Tag } from '../atoms/Tag';
import { Like } from '../atoms/Like';
import { Comment } from '../atoms/Comment';
import { Share } from '../atoms/Share';
import Image from 'next/image';

interface Props {}

export const PostItem = (props: Props) => {
  const articles = useRecoilValue(articleState);

  return (
    <>
      <div className=' border dark:border-penn-gray dark:bg-penn-darkGray rounded-lg p-4 text-left'>
        <div className='mx-4 my-3'>
          <div className='flex gap-4'>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-1 my-2 flex-grow'>
                <UserInfo />
                <h2 className='text-left text-lg '>魅力的なエンジニアの要素とは？</h2>
                <p className='text-sm text-left overflow-ellipsis ...'>
                  魅力的なエンジニアの要素とは、いまでも、このような役割分担が主流ではないかと思います。しかし、魅力的なエンジニアの要素とは、いまでも、このような役割分担が主流ではないかと思います。しかし、...
                </p>
              </div>
              <Image
                className='rounded-md flex-shrink'
                src='https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
                alt='Avatar Image'
                width={500}
                height={150}
                layout="fixed"
              />
            </div>
          </div>

          <Tag>キャリア</Tag>
          <div className='flex justify-between mt-2'>
            <div className='flex gap-4'>
              <Like />
              <Comment />
            </div>
            <Share />
          </div>
        </div>
      </div>
    </>
  );
};
