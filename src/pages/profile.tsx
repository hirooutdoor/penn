import React, { useEffect } from 'react';

import { NextPage } from 'next';
import SideBar from 'src/components/templates/SideBar';
import UserProfile from 'src/components/templates/UserProfile';
import TagFilter from 'src/components/organism/TagFilter';
import { auth } from 'src/lib/firebase/firebase';
import { useRouter } from 'next/router';

interface Props {}

const Profile: NextPage = (props: Props) => {
  const router = useRouter();
  const user = auth.currentUser;
  
  useEffect(() => {
    !user && router.push('/');
  }, [router, user]);

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

export default Profile;
