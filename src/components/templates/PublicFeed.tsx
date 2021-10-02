import React from 'react'
import { useRecoilValue } from 'recoil'
import { articleState } from 'src/store/articleGlobalState'
import SortButton from '../atoms/SortButton'
import FilterItem from '../organism/FilterItem'
import { PostItem } from '../organism/PostItem'
import { Filter } from '../organism/Filter'
import { Post } from '../organism/Post'


const PublicFeed = () => {

  const articles = useRecoilValue(articleState)

  return (
    <div className='flex flex-col ml-48 '>
      <div className='flex justify-start gap-4'>
        <SortButton />
        <Filter>
          <div className='flex gap-10'>
            <FilterItem isActive>フォロー</FilterItem>
            <FilterItem isActive={false}>おすすめ</FilterItem>
            <FilterItem isActive={false}>TOP</FilterItem>
          </div>
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

export default PublicFeed;
