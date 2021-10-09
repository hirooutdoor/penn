import React from 'react';

import { NextPage } from 'next';
import SideBar from 'src/components/templates/SideBar';
import UserProfile from 'src/components/templates/UserProfile';
import TagFilter from 'src/components/organism/TagFilter';

interface Props {}

const profile: NextPage = (props: Props) => {
  return (
    <div className='container dark:bg-black transition duration-500 container font-Poppins text-penn-dark dark:text-penn-light'>
      <main className='flex justify-between gap-8 '>
        <SideBar />
        <UserProfile />
        <TagFilter />
      </main>
    </div>
  );
};

export default profile;
