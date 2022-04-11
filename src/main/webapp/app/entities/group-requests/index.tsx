import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupRequests from './group-requests';
import GroupRequestsDetail from './group-requests-detail';
import GroupRequestsUpdate from './group-requests-update';
import GroupRequestsDeleteDialog from './group-requests-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupRequestsDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupRequests} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupRequestsDeleteDialog} />
  </>
);

export default Routes;
