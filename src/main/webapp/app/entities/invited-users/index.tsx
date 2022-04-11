import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import InvitedUsers from './invited-users';
import InvitedUsersDetail from './invited-users-detail';
import InvitedUsersUpdate from './invited-users-update';
import InvitedUsersDeleteDialog from './invited-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={InvitedUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={InvitedUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={InvitedUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={InvitedUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={InvitedUsersDeleteDialog} />
  </>
);

export default Routes;
