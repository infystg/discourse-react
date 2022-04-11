import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import AllowedPmUsers from './allowed-pm-users';
import AllowedPmUsersDetail from './allowed-pm-users-detail';
import AllowedPmUsersUpdate from './allowed-pm-users-update';
import AllowedPmUsersDeleteDialog from './allowed-pm-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AllowedPmUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AllowedPmUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AllowedPmUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={AllowedPmUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AllowedPmUsersDeleteDialog} />
  </>
);

export default Routes;
