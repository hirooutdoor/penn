import React from 'react';
import { Tag } from '../atoms/Tag';

interface Props {}

export const TagBox = (props: Props) => {
  return (
    <>
      <p className='mt-3'>おすすめのトピック</p>
      <div className='flex flex-wrap gap-2 border rounded-lg p-4 my-1 justify-items-start'>
        <Tag>キャリア</Tag>
        <Tag>人生</Tag>
        <Tag>生産性</Tag>
        <Tag>マインドセット</Tag>
        <Tag>学習法</Tag>
        <Tag>JavaScript</Tag>
        <Tag>呼吸法</Tag>
      </div>
    </>
  );
};
