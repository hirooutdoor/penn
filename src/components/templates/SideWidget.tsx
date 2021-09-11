import React from 'react'
import { PopularArticles } from '../organism/PopularArticles'
import { PopularUsers } from '../organism/PopularUsers'
import { TagBox } from '../organism/TagBox'

interface Props {
  
}

export const SideWidget = (props: Props) => {
  return (
    <div className='flex flex-col gap-2 mt-14'>
      <TagBox/>
      <PopularArticles/>
      <PopularUsers/>
    </div>
  )
}
