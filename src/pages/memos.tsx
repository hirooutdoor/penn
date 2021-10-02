import React from 'react';
import { NextPage } from 'next';

import PrivateFeed from 'src/components/templates/PrivateFeed';
import SideBar from 'src/components/templates/SideBar';
import RightContent from 'src/components/templates/RightContent';

const memos: NextPage = () => {
  return (
    <div className='dark:bg-black transition duration-500'>
      <div className='container font-Poppins text-penn-dark dark:text-penn-light'>
        <main className='flex justify-between gap-8 '>
          <SideBar />
          <PrivateFeed />
          <RightContent />
        </main>
      </div>
    </div>
  );
};

export default memos;
