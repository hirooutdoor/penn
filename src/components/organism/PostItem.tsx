import React from 'react';
import { UserInfo } from '../molecles/UserInfo';
import { articleState } from 'src/store/articleGlobalState';
import { useRecoilValue } from 'recoil';
import { Like } from '../atoms/Like';
import { Comment } from '../atoms/Comment';
import MenuIcon from '../atoms/MenuIcon';
import MyCodeBlock from 'src/components/molecles/CodeBlock';

interface Props {}

export const PostItem = (props: Props) => {
  const articles = useRecoilValue(articleState);

  const inputCode = {
    code: 'const articles = useRecoilValue(articleState);\nconst inputCode = console.log("hello world") ',
    language: 'tsx',
    showLineNumbers: true,
  };

  return (
    <>
      <div className=' border dark:border-penn-gray dark:bg-penn-darkGray rounded-lg p-4 text-left '>
        <div className='mx-4 my-3'>
          <div className='flex gap-4'>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-1 my-2 flex-grow'>
                <div className='flex justify-between'>
                  <UserInfo />
                  <MenuIcon>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                    />
                  </MenuIcon>
                </div>
                <h2 className='text-left text-lg '>魅力的なHooksの要素とは？</h2>
                <p className='text-sm text-left overflow-ellipsis ...'>
                  Hooksの要素とは、いまでも、このような役割分担が主流ではないかと思います。しかし、魅力的なHooksの要素とは、いまでも、このような役割分担が主流ではないかと思います。しかし、...
                </p>
                <MyCodeBlock inputCode={inputCode} />
              </div>
            </div>
          </div>
          <div className='flex justify-between mt-2'>
            <div className='flex gap-4'>
              <Like />
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
