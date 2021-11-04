// penn.jp/community
import type { NextPage } from 'next';
import Head from 'next/head';

import PublicFeed from 'src/components/templates/PublicFeed';
import { SideWidget } from 'src/components/templates/SideWidget';
import SideBar from 'src/components/templates/SideBar';
import { useRecoilState } from 'recoil';
import { userState } from 'src/store/state';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Community: NextPage = () => {
  const [user, setUser] = useRecoilState(userState);

  const router = useRouter();
  useEffect(() => {
    !user && router.push('/');
  }, [router, user]);

  return (
    <>
      <div className='dark:bg-black transition duration-500'>
        <div className='container font-Poppins text-penn-dark dark:text-penn-light'>
          {/* justify-between で要素の幅が固定されている */}
          <main className='flex justify-between gap-10'>
            <SideBar />
            <PublicFeed />
            <SideWidget />
          </main>
        </div>
      </div>
    </>
  );
};

export default Community;
