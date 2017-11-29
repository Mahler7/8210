import uuid from 'uuid';

// export const addPost = (post) => ({
//   type: 'ADD_POST',
//   post
// });

export const addPost = (
  {
    title = '',
    content = '',
    createdAt = 0,
    author = ''
  } = {}
) => ({
  type: 'ADD_POST',
  post: {
    id: uuid(),
    title,
    content,
    createdAt,
    author
  }
});
console.log(addPost());