import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  UserInfo,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInAnonymously,
} from 'firebase/auth';

import { app, auth, db, provider, storage } from './firebase';
import Router, { useRouter } from 'next/router';
import { userState } from 'src/store/state';
import { UserState } from 'src/types/User';
// import { GetServerSideProps } from 'next';
// import { toast } from 'react-toastify'

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     redirect: {
//       permanent: true, // 永続的なリダイレクトかどうか
//       destination: '/community',
//     }
// }}

export const googleLogin = async () => {
  await signInWithPopup(auth, provider)
    .then(() => {
      console.log('google resolved');
      Router.push('/community');
    })
    .catch((e: any) => {
      alert(e.message);
    });
};

// export const githubLogin = async () => {
//   const provider = new GithubAuthProvider();
//   console.log('hello Github');
//   try {
//     await signInWithPopup(auth, provider);
//     Router.push('/community');
//   } catch (err: any) {
//     alert(err.message);
//   }
// };

// export const twitterLogin = async () => {
//   console.log('hello Twitter');
//   const provider = new TwitterAuthProvider();
//   try {
//     await signInWithPopup(auth, provider);
//     Router.push('/community');
//   } catch (err: any) {
//     alert(err.message);
//   }
// };

export const logout = async (): Promise<void> => {
  await signOut(auth)
    .then(() => {
      console.log('logout resolved');
      Router.push('/');
    })
    .catch((e: any) => {
      alert(e.message);
    });
};

// To manage the user authentication
export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState<UserState | null>(userState);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser]);

  return isLoading;
};

// Fuction to recall the userState in the other components
export const useUser = () => {
  return useRecoilValue(userState);
};
