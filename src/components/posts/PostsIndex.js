import React from 'react';
import { connect } from 'react-redux';
import PostsIndexItem from './PostsIndexItem';

const PostsIndex = (props) => (
  <div>
    <h1>Posts Index</h1>
    {console.log("Props", props)}
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

const ConnectedPostsIndex = connect(mapStateToProps)(PostsIndex);

export default ConnectedPostsIndex;