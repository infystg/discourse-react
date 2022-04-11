import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import QuotedPosts from './quoted-posts';
import QuotedPostsDetail from './quoted-posts-detail';
import QuotedPostsUpdate from './quoted-posts-update';
import QuotedPostsDeleteDialog from './quoted-posts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={QuotedPostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={QuotedPostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={QuotedPostsDetail} />
      <ErrorBoundaryRoute path={match.url} component={QuotedPosts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={QuotedPostsDeleteDialog} />
  </>
);

export default Routes;
