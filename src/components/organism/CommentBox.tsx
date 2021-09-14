import React from 'react';

interface Props {}

export const CommentBox = (props: Props) => {
  return (
    <div>
      <div className='mt-3 p-3 w-full'>
        <p className='text-xl mb-2'>コメント</p>
        <textarea className='border p-2 rounded w-full' placeholder='Write something...'></textarea>
      </div>
      <div className='flex justify-between mx-3'>
        <div>
          <button className='px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700'>
            Submit
          </button>
        </div>
        <div>
          <a href='#'>...</a>
        </div>
      </div>
    </div>
  );
};
