import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addPost } from './actions/posts';

const store = configureStore();
store.dispatch(addPost({ title: "test" }))
console.log(store.getState());



ReactDOM.render(<AppRouter />, document.getElementById('app'));