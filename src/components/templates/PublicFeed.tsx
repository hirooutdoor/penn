import React from 'react'
import { useRecoilValue } from 'recoil'
import { articleState } from 'src/store/state'
import SortButton from '../atoms/SortButton'
import FilterItem from '../organism/FilterItem'
import { PostItem } from '../organism/PostItem'
import { Filter } from '../organism/Filter'
import { Post } from '../organism/Post'


const PublicFeed = () => {

  const articles = useRecoilValue(articleState)

  return (
    <div className='flex flex-col ml-48 mt-10'>
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
        {articles.map((article,index) => (
          <>
          {/* TODO unique idを付与する。 */}
          <PostItem key={index} />
          </>
        ))}
      </Post>
    </div>
  )
}

export default PublicFeed;
