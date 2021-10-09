import React from 'react';

interface Props {}

const TagFilter = (props: Props) => {
  //TODO・タグフィルターの作成
  return (
    <ul className='flex flex-col gap-2 mt-80 cursor-pointer'>
      <li>Next.js (12)</li>
      <li>React (20)</li>
      <li>JavaScript (32)</li>
    </ul>
  );
};

export default TagFilter;
