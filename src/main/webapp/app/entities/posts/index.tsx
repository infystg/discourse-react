import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Posts from './posts';
import PostsDetail from './posts-detail';
import PostsUpdate from './posts-update';
import PostsDeleteDialog from './posts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Posts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostsDeleteDialog} />
  </>
);

export default Routes;
