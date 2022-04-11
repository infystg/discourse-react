import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BadgePosts from './badge-posts';
import BadgePostsDetail from './badge-posts-detail';
import BadgePostsUpdate from './badge-posts-update';
import BadgePostsDeleteDialog from './badge-posts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BadgePostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BadgePostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BadgePostsDetail} />
      <ErrorBoundaryRoute path={match.url} component={BadgePosts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BadgePostsDeleteDialog} />
  </>
);

export default Routes;
