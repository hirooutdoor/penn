import { atom, selector } from 'recoil';
import { UserState } from 'src/types/User';

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
      id: 0,
    },
  ],
});

// export const isDisabledState = atom({
//   key: "isDisabledState",
//   default: false
// })

export const memoState = atom({
  key: 'memoState',
  default: [{ id: '' }],
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
