import React from 'react'

import { PopularPosts } from '../organism/PopularPosts'
import { PopularUsers } from '../organism/PopularUsers'
import { TagBox } from '../organism/TagBox'

interface Props {
  
}

export const SideWidget = (props: Props) => {
  return (
    <div className='flex flex-col gap-2 mt-14'>
      <TagBox/>
      <PopularPosts/>
      <PopularUsers/>
    </div>
  )
}
