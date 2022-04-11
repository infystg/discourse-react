import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import AnonymousUsers from './anonymous-users';
import AnonymousUsersDetail from './anonymous-users-detail';
import AnonymousUsersUpdate from './anonymous-users-update';
import AnonymousUsersDeleteDialog from './anonymous-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AnonymousUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AnonymousUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AnonymousUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={AnonymousUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AnonymousUsersDeleteDialog} />
  </>
);

export default Routes;
