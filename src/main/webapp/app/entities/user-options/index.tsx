import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserOptions from './user-options';
import UserOptionsDetail from './user-options-detail';
import UserOptionsUpdate from './user-options-update';
import UserOptionsDeleteDialog from './user-options-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserOptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserOptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserOptionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserOptions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserOptionsDeleteDialog} />
  </>
);

export default Routes;
