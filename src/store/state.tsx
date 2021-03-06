import { atom, selector } from 'recoil';
import { CurrentUserState, UserState } from 'src/types/types';

export const articleState = atom({
  key: 'articleState',
  default: [
    {
      title: '',
      content: '',
      category: '',
      readTime: 0,
      userName: '',
      commentsNum: 0,
      comments: '',
      likes: 0,
    },
  ],
});

// export const isDisabledState = atom({
//   key: "isDisabledState",
//   default: false
// })

export const buttonState = atom({
  key: '',
  default: false,
});

export const memosState = atom({
  key: 'memosState',
  default: [{ id: '', title: '', date: '', category: '', isOpen: true }],
});

export const currentTodoSelector = selector({
  key: 'editArticleState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const currentArticle = get(articleState);

    return currentArticle;
  },
});

export const userState = atom<UserState>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
});

export const currentUserState = atom<CurrentUserState>({
  key: 'currentUserState',
  default: {
    displayName: 'Undefined',
    description: '',
    photoURL: null,
  },
  dangerouslyAllowMutability: true,
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const displayNameState = atom({
  key: 'displayNameState',
  default: '',
});

export const avatarImageState = atom<string | null | undefined | File | void>({
  key: 'avatarImageState',
  default: null,
});

export const showState = atom({
  key: 'showState',
  default: false,
});

export const isOnboardingState = atom({
  key: 'isOnboardingState',
  default: false,
});

export const progressState = atom({
  key: 'progressState',
  default: 0,
});
