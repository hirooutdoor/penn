// penn.jp/community
import type { NextPage } from 'next';
import Head from 'next/head';

import PublicFeed from 'src/components/templates/PublicFeed';
import { SideWidget } from 'src/components/templates/SideWidget';
import SideBar from 'src/components/templates/SideBar';

const Community: NextPage = () => {
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
