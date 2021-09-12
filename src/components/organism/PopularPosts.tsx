import React from 'react';
import { PopularPostItem } from '../molecles/PopularPostItem';
import { Filter } from './Filter';
import FilterItem from './FilterItem';

interface Props {}

export const PopularPosts = (props: Props) => {
  return (
    <>
      <p className='mt-4'>おすすめの記事</p>
      <div className='border rounded-lg p-2 text-left divide-y'>
        <div className='flex text-xs w-[300px]'>
          <Filter>
            <FilterItem isActive>1週間</FilterItem>
          </Filter>
          <Filter>
            <FilterItem isActive={false}>1ヶ月</FilterItem>
          </Filter>
          <Filter>
            <FilterItem isActive={false}>6ヶ月</FilterItem>
          </Filter>
        </div>
          <PopularPostItem />
          <PopularPostItem />
          <PopularPostItem />
      </div>
    </>
  );
};
