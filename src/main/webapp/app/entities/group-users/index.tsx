import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupUsers from './group-users';
import GroupUsersDetail from './group-users-detail';
import GroupUsersUpdate from './group-users-update';
import GroupUsersDeleteDialog from './group-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupUsersDeleteDialog} />
  </>
);

export default Routes;
