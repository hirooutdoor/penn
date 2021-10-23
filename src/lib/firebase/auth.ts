import { useEffect, useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  UserInfo,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInAnonymously,
} from 'firebase/auth';

import { app, auth, db, storage } from './firebase';
import router from 'next/router';
import { userState } from 'src/store/state';
import { UserState } from 'src/types/User';

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
  try {
    router.push('/community');
  } catch (err: any) {
    alert(err.message);
  }
};

export const githubLogin = async () => {
  const provider = new GithubAuthProvider();
  await signInWithRedirect(auth, provider);
  try {
    router.push('/community');
  } catch (err: any) {
    alert(err.message);
  }
};

export const twitterLogin = async () => {
  const provider = new TwitterAuthProvider();
  await signInWithRedirect(auth, provider);
  try {
    router.push('/community');
  } catch (err: any) {
    alert(err.message);
  }
};

export const logout = async () => {
  await signOut(auth);
  try {
    router.push('/');
  } catch (err: any) {
    alert(err.message);
  }
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
