import { NextPage } from 'next';
import React, { ReactElement, useEffect } from 'react';
import { useRecoilState } from 'recoil';
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
            <div className='flex flex-col ml-48 gap-4 my-10'>
              {/* TODOメモカテゴリ */}
              <h1 className='font-bold text-lg my-4'>🐬 React</h1>
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
