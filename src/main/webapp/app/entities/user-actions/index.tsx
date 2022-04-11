import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserActions from './user-actions';
import UserActionsDetail from './user-actions-detail';
import UserActionsUpdate from './user-actions-update';
import UserActionsDeleteDialog from './user-actions-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserActionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserActionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserActionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserActions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserActionsDeleteDialog} />
  </>
);

export default Routes;
