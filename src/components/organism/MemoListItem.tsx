import React from 'react';

import { Tag } from '../atoms/Tag';
import { Like } from 'src/components/atoms/Like';
import OpenButton from '../atoms/OpenButton';

interface Props {
  title: string;
  date: string;
  category: string;
  isOpen: boolean;
}

const MemoListItem = ({ title, date, category, isOpen }: Props) => {
  return (
    <>
      <div className='shadow-md items-start rounded-lg bg-white flex-col flex-wrap w-full cursor-pointer dark:border-penn-gray dark:bg-penn-darkGray transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:opacity-75 dark:hover:opacity-100 dark:opacity-90'>
        <div className='py-4 px-6 bg-white dark:border-penn-gray dark:bg-penn-darkGray rounded-lg '>
          <div className='block'>
            <span className='font-semibold text-md tracking-wide'>{title}</span>
          </div>
          <div className='flex justify-around mt-2'>
            <OpenButton isOpen={isOpen}/>
            <p className='text-penn-gray text-tiny m-1'>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoListItem;
