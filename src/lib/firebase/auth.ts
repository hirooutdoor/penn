import { useEffect, useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  User,
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

type UserState = User | null;

const userState = atom<UserState>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
});

export const googleLogin = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider)
    .then(() => {
      router.push('/community');
    })
    .catch((err) => alert(err.message));
};

export const githubLogin = async (): Promise<void> => {
  const provider = new GithubAuthProvider();
  await signInWithRedirect(auth, provider)
    .then(() => {
      router.push('/community');
    })
    .catch((err) => alert(err.message));
};

export const twitterLogin = async (): Promise<void> => {
  const provider = new TwitterAuthProvider();
  await signInWithRedirect(auth, provider)
    .then(() => {
      router.push('/community');
    })
    .catch((err) => alert(err.message));
};

export const logout = (): Promise<void> => {
  return signOut(auth).then(() => {
    router.push('/');
  });
};

// To manage the user authentication
export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser]);

  return isLoading;
};

// Fuction to recall the userState in the other components
export const useUser = (): UserState => {
  return useRecoilValue(userState);
};
