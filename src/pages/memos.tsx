import React, { useEffect } from 'react';
import { NextPage } from 'next';

import PrivateFeed from 'src/components/templates/PrivateFeed';
import SideBar from 'src/components/templates/SideBar';
import RightContent from 'src/components/templates/RightContent';
import { auth } from 'src/lib/firebase/firebase';
import { useRouter } from 'next/router';

const Memos: NextPage = () => {
  const user = auth.currentUser;
  const router = useRouter();
  
  useEffect(() => {
    !user && router.push('/');
  }, [router, user]);

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

export default Memos;
