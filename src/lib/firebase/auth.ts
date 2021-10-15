import { useEffect, useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  User,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInAnonymously,
} from 'firebase/auth';

import { app, auth, db, storage } from './firebase';

type UserState = User | null;

const userState = atom<UserState>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
});

export const googleLogin = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider).catch((err) => alert(err.message));
};

export const githubLogin = (): Promise<void> => {
  const provider = new GithubAuthProvider();
  return signInWithRedirect(auth, provider).catch((err) => alert(err.message));
};

export const twitterLogin = (): Promise<void> => {
  const provider = new TwitterAuthProvider();
  return signInWithRedirect(auth, provider).catch((err) => alert(err.message));
};

export const logout = (): Promise<void> => {
  return signOut(auth);
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
