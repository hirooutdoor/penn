import React, { useState } from 'react';

interface Props {}

const SubmitButton = (props: Props) => {
  const [isFilled, setIsFilled] = useState(true);

  //TODO 同じボタンのスタイルはButtonをchildren渡して１つに統一

  return (
    <>
      {isFilled ? (
        <div className='text-xs inline-flex leading-sm px-3 py-1 border  border-penn-green dark:bg-penn-green dark:bg-opacity-10 dark:text-penn-lightGreen text-penn-green rounded-full w-18'>
          <button type='button'>投稿する</button>
        </div>
      ) : (
        <div className='text-xs inline-flex leading-sm px-3 py-1 border border-penn-gray text-penn-gray rounded-full w-18'>
          <button type='button' className='inline-flex items-center '>
            <span>投稿する</span>
          </button>
        </div>
      )}
    </>
  );
};
export default SubmitButton;
