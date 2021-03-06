// penn.jp/
import type { NextPage } from 'next';
import Head from 'next/head';

import SideBar from 'src/components/templates/SideBar';
import { Header } from 'src/components/templates/Header';
import AppIntroduction from 'src/components/templates/AppIntroduction';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isOnboardingState, showState, userState } from 'src/store/state';
import { auth } from 'src/lib/firebase/firebase';

const Home: NextPage = () => {
  const router = useRouter();

  const user = auth.currentUser;
  const setShow = useSetRecoilState(showState);
  const isOnboarding = useRecoilValue(isOnboardingState);

  useEffect(() => {
    isOnboarding ? router.push('/onboarding') : user ? router.push('/community') : null;
    setShow(false);
  }, [isOnboarding, router, user, setShow]);

  console.log(user);
  console.log(user?.displayName);
  console.log(user?.uid);
  console.log(user?.photoURL);

  return (
    <>
      <Head>
        <title>penn</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='dark:bg-black transition duration-500'>
        <div className='container font-Poppins text-penn-dark dark:text-penn-light'>
          {/* justify-between で要素の幅が固定されている */}
          <Header />
          <SideBar />
          <main className='flex justify-between gap-10 '>
            <AppIntroduction />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
