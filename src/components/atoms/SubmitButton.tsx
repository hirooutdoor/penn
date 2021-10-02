import React, { useState } from 'react';

interface Props {}

const SubmitButton = (props: Props) => {
  const [isFilled, setIsFilled] = useState(true);

  return (
    <>
      {isFilled ? (
        <div className='text-xs inline-flex leading-sm px-3 py-1 border  border-penn-green text-penn-green rounded-full w-18'>
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
