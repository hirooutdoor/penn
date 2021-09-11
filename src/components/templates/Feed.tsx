import React from 'react'
import { useRecoilValue } from 'recoil'
import { articleState } from 'src/store/articleGlobalState'
import SortButton from '../atoms/SortButton'
import FilterItem from '../organism/FilterItem'
import { PostItem } from '../organism/PostItem'
import { Filter } from '../organism/Filter'
import { Post } from '../organism/Post'


export const Feed = () => {

  const articles = useRecoilValue(articleState)

  return (
    <div className='flex flex-col'>
      <div className='flex justify-start '>
        <SortButton />
        <Filter>
          <FilterItem isActive>フォロー</FilterItem>
          <FilterItem isActive={false}>おすすめ</FilterItem>
          <FilterItem isActive={false}>TOP</FilterItem>
        </Filter>
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
  )
}
