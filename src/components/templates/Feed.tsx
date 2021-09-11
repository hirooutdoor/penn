import React from 'react'
import { useRecoilValue } from 'recoil'
import { articleState } from 'src/store/articleGlobalState'
import SortButton from '../atoms/SortButton'
import FilterItem from '../molecles/FilterItem'
import { Filter } from '../organism/Filter'
import { Posts } from '../organism/Posts'


export const Feed = () => {

  const articles = useRecoilValue(articleState)

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center gap-x-12'>
        <SortButton />
        <Filter>
          <FilterItem isActive>フォロー</FilterItem>
          <FilterItem isActive={false}>おすすめ</FilterItem>
          <FilterItem isActive={false}>TOP</FilterItem>
        </Filter>
      </div>
      <Posts />
    </div>
  )
}
