import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserWarnings from './user-warnings';
import UserWarningsDetail from './user-warnings-detail';
import UserWarningsUpdate from './user-warnings-update';
import UserWarningsDeleteDialog from './user-warnings-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserWarningsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserWarningsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserWarningsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserWarnings} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserWarningsDeleteDialog} />
  </>
);

export default Routes;
