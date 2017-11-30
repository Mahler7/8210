import posts from '../fixtures/posts';
import { addPost } from '../../actions/posts.js';

test('should setup addPost Action object', () => {
  const action = addPost(posts[2]);
  expect(action).toEqual({
    type: 'ADD_POST',
    post: posts[2]
  })
});