import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from '../components/posts/PostsIndex';
import PostNew from '../components/posts/PostNew';
import PostEdit from '../components/posts/PostEdit';
import PostShow from '../components/posts/PostShow';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={PostsIndex} exact={true} />
        <Route path="/posts/new" component={PostNew} exact={true} />
        <Route path="/posts/:id/edit" component={PostEdit} exact={true} />
        <Route path="/posts/:id" component={PostShow} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;