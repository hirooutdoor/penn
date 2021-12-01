import { NextPage } from 'next';
import React, { ReactElement, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import MenuIcon from 'src/components/atoms/MenuIcon';
import MemoList from 'src/components/organism/MemoList';
import MemoListItem from 'src/components/organism/MemoListItem';
import SideBar from 'src/components/templates/SideBar';
import { memosState } from 'src/store/state';

interface Props {}

const Memos: NextPage = () => {
  const [memos, setMemos] = useRecoilState(memosState);

  useEffect(() => {
    setMemos([
      {
        id: 'sdhfan12',
        title: 'Propsの基礎',
        date: 'Today',
        category: 'React',
        isOpen: true,
      },
      {
        id: 'sdhfa12n12',
        title: 'Hooksの基礎',
        date: 'Today',
        category: 'React',
        isOpen: false,
      },
      {
        id: 'sdshfansjs12',
        title: 'ステート管理の基礎',
        date: 'Today',
        category: 'React',
        isOpen: true,
      },
      {
        id: 'sdhfhs52an12',
        title: 'Reactステート管理の最適解',
        date: 'Today',
        category: 'React',
        isOpen: true,
      },
      {
        id: 'sdhfan162342',
        title: 'useRefの使い道と使い方',
        date: 'Today',
        category: 'React',
        isOpen: false,
      },
      {
        id: 'sdhfan16122342',
        title: 'useRefの使い道と使い方',
        date: 'Today',
        category: 'React',
        isOpen: true,
      },
      {
        id: 'sdhf555an162342',
        title: 'useRefの使い道と使い方',
        date: 'Today',
        category: 'React',
        isOpen: false,
      },
      {
        id: 'sdhfa2234n162342',
        title: 'useRefの使い道と使い方',
        date: 'Today',
        category: 'React',
        isOpen: true,
      },
      {
        id: 'sdhfa2234n162342',
        title: 'useRefの使い道と使い方',
        date: 'Today',
        category: 'React',
        isOpen: true,
      },
    ]);
  }, [setMemos]);

  return (
    <div>
      <div className='dark:bg-black transition duration-500'>
        <div className='container font-Poppins text-penn-dark dark:text-penn-light'>
          <main className='flex justify-between gap-8 '>
            <SideBar />
            <div className='flex flex-col ml-48 gap-4 my-10 z-0'>
              {/* TODOメモカテゴリ */}
              <div className='flex justify-between'>
                <h1 className='font-bold text-lg my-4'>🐬 React</h1>
                <div className='flex my-4'>
                  <MenuIcon>
                    <path
                      className='text-gray-400 '
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </MenuIcon>
                  <input
                    className='text-penn-gray ml-2 border-b-2 outline-none focus:border-penn-green focus:border-opacity-50 transition-all duration-400 px-2 focus:placeholder-gray-300 dark:bg-transparent dark:focus:border-penn-lightGreen dark:placeholder-gray-500 dark:focus:placeholder-gray-600 dark:text-gray-400'
                    placeholder='Filter'
                  />
                </div>
              </div>
              <MemoList>
                {memos.map((memo) => (
                  <>
                    <MemoListItem
                      key={memo.id}
                      title={memo.title}
                      date={memo.date}
                      category={memo.category}
                      isOpen={memo.isOpen}
                    />
                  </>
                ))}
              </MemoList>
              {/* TODO See more function */}
              <p className='flex justify-end text-penn-gray cursor-pointer hover:text-penn-darkGray transition-all duration-300'>
                {' '}
                ＞ See more
              </p>
              <h1 className='font-bold text-lg my-4'>🦍 Next.js</h1>
              <MemoList>
                {memos.map((memo) => (
                  <>
                    <MemoListItem
                      key={memo.id}
                      title={memo.title}
                      date={memo.date}
                      category={memo.category}
                      isOpen={memo.isOpen}
                    />
                  </>
                ))}
              </MemoList>
              <p className='flex justify-end text-penn-gray cursor-pointer hover:text-penn-darkGray transition-all duration-300'>
                ＞ See more
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Memos;
