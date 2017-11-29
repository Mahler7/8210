import { createStore, combineReducers } from 'redux';
import postsReducer from '../reducers/posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer
    })
  ); 
  return store;
};
