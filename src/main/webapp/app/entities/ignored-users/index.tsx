import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import IgnoredUsers from './ignored-users';
import IgnoredUsersDetail from './ignored-users-detail';
import IgnoredUsersUpdate from './ignored-users-update';
import IgnoredUsersDeleteDialog from './ignored-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={IgnoredUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={IgnoredUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={IgnoredUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={IgnoredUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={IgnoredUsersDeleteDialog} />
  </>
);

export default Routes;
