import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoryUsers from './category-users';
import CategoryUsersDetail from './category-users-detail';
import CategoryUsersUpdate from './category-users-update';
import CategoryUsersDeleteDialog from './category-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoryUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoryUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoryUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryUsersDeleteDialog} />
  </>
);

export default Routes;
