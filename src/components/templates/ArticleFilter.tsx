import React from 'react'
import SortButton from '../atoms/SortButton'

interface Props {
  
}

export const ArticleFilter = (props: Props) => {
  return (
    <div className='flex justify-center gap-x-12'>
      <div>
        <SortButton />
      </div>
      <div className='flex justify-center gap-x-6'>
        <p className='text-penn-dark'>フォロー</p>
        <p className='text-penn-gray'>おすすめ</p>
        <p className='text-penn-gray'>TOP</p>
      </div>
    </div>
  )
}
