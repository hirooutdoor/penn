import React from 'react';

interface Props {}

export const FollowButotn = (props: Props) => {
  return (
    <div>
      <div className='text-xs inline-flex leading-sm px-3 py-1 bg-green-50 dark:bg-green-100 text-penn-green rounded-full'>
        <button type='button'>Follow</button>
      </div>
    </div>
  );
};
