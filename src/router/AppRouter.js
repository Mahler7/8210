import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PostsIndex from '../components/posts/PostsIndex';
import PostNew from '../components/posts/PostNew';
import PostEdit from '../components/posts/PostEdit';
import PostShow from '../components/posts/PostShow';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={PostsIndex} exact={true} />
        <Route path="/posts/new" component={PostNew} exact={true} />
        <Route path="/posts/:id/edit" component={PostEdit} exact={true} />
        <Route path="/posts/:id" component={PostShow} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;