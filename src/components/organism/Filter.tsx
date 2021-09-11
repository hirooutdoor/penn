import React from 'react';
import SortButton from '../atoms/SortButton';

interface Props {
  children: React.ReactNode;
}

export const Filter = (props: Props) => {
  const { children } = props;

  return (
    <nav className='p-4'>
      <ul className='flex space-x-2'>{children}</ul>
    </nav>
  );
};

{
  /* <div className='flex justify-center gap-x-6'>
<p className='text-penn-green cursor-pointer'>フォロー</p>
<p className='text-penn-gray cursor-pointer'>おすすめ</p>
<p className='text-penn-gray cursor-pointer'>TOP</p>
</div> */
}
