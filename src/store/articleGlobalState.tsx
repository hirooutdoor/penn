import { atom, selector } from 'recoil';

export const articleState = atom({
  key: 'articleState',
  default: [{
    title: '',
    content: '',
    category: '',
    readTime: 0,
    userName: '',
    commentsNum: 0,
    comments: '',
    likes: 0,
    id: 0,
  }],
});

// export const isDisabledState = atom({
//   key: "isDisabledState",
//   default: false
// })

export const memoState = atom({
  key: 'memoState',
  default: [{
    title: '',
    content: '',
    category: '',
    commentsNum: 0,
    comments: '',
    likes: 0,
    id: 0,
  }],
});


export const currentTodoSelector = selector({
  key: 'editArticleState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const currentArticle = get(articleState);

    return currentArticle;
  },
});
