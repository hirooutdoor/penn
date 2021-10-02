import React from 'react';
import CloseButton from '../atoms/CloseButton';
import SubmitButton from '../atoms/SubmitButton';

import { AvatarWithName } from '../molecles/AvatarWithName';

interface Props {}

const EditorArea = (props: Props) => {
  return (
    <>
      <div className=' border dark:border-penn-gray dark:bg-penn-darkGray rounded-lg text-left mb-10 '>
        <div className='my-3 border-b dark:border-b-penn-gray'>
          <div className='mt-6 ml-8 '>
            <AvatarWithName />
          </div>
          <ul className='flex cursor-pointer mt-4 border-b dark:border-b-penn-gray'>
            <li className='ml-4 py-2 px-6 bg-white rounded-t-lg border-b hover:border dark:bg-penn-darkGray hover:border-b-white dark:border-penn-gray  dark:border-b-penn-darkGray'>
              Write
            </li>
            <li className='py-2 px-6 bg-white rounded-t-lg  border-b hover:border hover:border-b-white text-gray-500 dark:bg-penn-darkGray dark:border-penn-gray dark:border-b-penn-darkGray '>
              Preview
            </li>
            <li className='py-2 px-6 bg-white rounded-t-lg border-b hover:border hover:border-b-white text-gray-500 dark:bg-penn-darkGray dark:border-penn-gray dark:border-b-penn-darkGray '>
              Guide
            </li>
          </ul>
          <textarea className='w-[100%] h-60 border-none outline-none dark:border-penn-gray dark:bg-black rounded-lg p-8 text-left mb-10 ' />
        </div>
        <div className='flex justify-end gap-4 mr-10 mb-4'>
          <CloseButton />
          <SubmitButton />
        </div>
      </div>
    </>
  );
};

export default EditorArea;
