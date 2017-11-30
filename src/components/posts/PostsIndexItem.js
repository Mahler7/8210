import React from 'react';

const PostsIndexItem = ({ title, content, createdAt, author }) => (
  <div>
    <h1>{title}</h1>
    <span><i>{author}</i>-<i>{createdAt}</i></span>
    <p>{content}</p>
  </div>
);

export default PostsIndexItem;