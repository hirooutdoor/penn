import React from 'react'
import { PostItem } from '../molecles/PostItem'
import { useRecoilValue } from 'recoil'
import { articleState } from 'src/store/articleGlobalState'

export const Posts = () => {

  const articles = useRecoilValue(articleState)

  return (
    <div className='flex flex-col justify-center my-6 align-middle text-center gap-y-4'>
      {articles.map((article) => (
        <PostItem key={article.id} />
      ))}
    </div>
  )
}