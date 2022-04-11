import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostReplies from './post-replies';
import PostRepliesDetail from './post-replies-detail';
import PostRepliesUpdate from './post-replies-update';
import PostRepliesDeleteDialog from './post-replies-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostRepliesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostRepliesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostRepliesDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostReplies} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostRepliesDeleteDialog} />
  </>
);

export default Routes;
