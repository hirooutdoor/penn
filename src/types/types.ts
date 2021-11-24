import {User} from 'firebase/auth'

export type UserState = User | null;

export type CurrentUserState = {
  displayName: string;
  description: string;
  photoURL: null | string;
}

export type Data = {
  description: string;
  pid: string;
  displayName: string;
};