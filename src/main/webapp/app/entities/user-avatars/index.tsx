import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserAvatars from './user-avatars';
import UserAvatarsDetail from './user-avatars-detail';
import UserAvatarsUpdate from './user-avatars-update';
import UserAvatarsDeleteDialog from './user-avatars-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserAvatarsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserAvatarsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserAvatarsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserAvatars} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserAvatarsDeleteDialog} />
  </>
);

export default Routes;
