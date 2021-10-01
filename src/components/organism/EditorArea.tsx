import React from 'react';
import { UserInfo } from '../molecles/UserInfo';

interface Props {}

const EditorArea = (props: Props) => {

  return (
    <>
      <div className=' border dark:border-penn-gray dark:bg-penn-darkGray rounded-lg p-4 text-left mb-10 '>
        <div className='mx-4 my-3'>
          <UserInfo />
          
        </div>
      </div>
    </>
  );
};

export default EditorArea;