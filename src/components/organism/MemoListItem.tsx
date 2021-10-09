import React from 'react';

import { Tag } from '../atoms/Tag';
import { Like } from 'src/components/atoms/Like';

interface Props {}

const MemoListItem = (props: Props) => {
  return (
    <>
      <div className='shadow-md group rounded-lg bg-white flex justify-center items-center content-div cursor-pointer dark:border-penn-gray dark:bg-penn-darkGray w-56'>
        <div className='py-4 px-6 bg-white dark:border-penn-gray dark:bg-penn-darkGray rounded-lg fd-cl '>
          <span className='block font-semibold text-lg tracking-wide'>React Hooksとは</span>
          <span className='block text-sm text-penn-gray mb-1'>
            Vivamus ac ligula sit amet erat luctus laoreet..
          </span>
          <div className='flex justify-around'>
            <Like />
            <p className='text-penn-gray text-tiny m-1'>2021/10/09</p>
            <Tag>React</Tag>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoListItem;
