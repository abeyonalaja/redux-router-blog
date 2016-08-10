import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/posts/index';
import PostNew from './components/posts/new';
import PostShow from './components/posts/show';


export default(
  <Route path="/" component={ App } >
    <IndexRoute component={ PostIndex } />
    <Route path="posts/new" component={ PostNew } / >
    <Route path="posts/:id" component={ PostShow } />
  </Route>
);
