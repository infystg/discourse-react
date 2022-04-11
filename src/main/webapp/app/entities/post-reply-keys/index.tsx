import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostReplyKeys from './post-reply-keys';
import PostReplyKeysDetail from './post-reply-keys-detail';
import PostReplyKeysUpdate from './post-reply-keys-update';
import PostReplyKeysDeleteDialog from './post-reply-keys-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostReplyKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostReplyKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostReplyKeysDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostReplyKeys} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostReplyKeysDeleteDialog} />
  </>
);

export default Routes;
