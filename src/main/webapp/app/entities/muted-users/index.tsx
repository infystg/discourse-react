import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MutedUsers from './muted-users';
import MutedUsersDetail from './muted-users-detail';
import MutedUsersUpdate from './muted-users-update';
import MutedUsersDeleteDialog from './muted-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MutedUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MutedUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MutedUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={MutedUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MutedUsersDeleteDialog} />
  </>
);

export default Routes;
