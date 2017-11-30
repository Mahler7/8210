import React from 'react';
import { connect } from 'react-redux';
import PostsIndexItem from './PostsIndexItem';

export const PostsIndex = (props) => (
  <div>
    <h1>Posts Index</h1>
    {props.posts.map((post) => {
      return <PostsIndexItem key={post.id}{...post}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostsIndex);