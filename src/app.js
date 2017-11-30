import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addPost } from './actions/posts';

const store = configureStore();
store.dispatch(addPost({ title: "test" }))
store.dispatch(addPost(
  { 
    title: "another one",
    content: "here is the article you wrote",
    createdAt: 10000,
    author: "me"
  }
))
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));