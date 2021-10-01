import React from 'react';
import { NextPage } from 'next';

import PrivateFeed from 'src/components/templates/PrivateFeed';
import SideBar from 'src/components/templates/SideBar';

const memos: NextPage = () => {
  return (
    <div className='dark:bg-black transition duration-500'>
      <div className='container font-Poppins text-penn-dark dark:text-penn-light'>
        <main className='flex justify-between gap-10 '>
          <SideBar />
          <PrivateFeed />
          <div className="my-10">Hello this is side widget</div>
        </main>
      </div>
    </div>
  );
};

export default memos;
