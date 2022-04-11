import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Users from './users';
import UsersDetail from './users-detail';
import UsersUpdate from './users-update';
import UsersDeleteDialog from './users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={Users} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UsersDeleteDialog} />
  </>
);

export default Routes;
