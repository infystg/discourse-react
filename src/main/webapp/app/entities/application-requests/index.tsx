import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ApplicationRequests from './application-requests';
import ApplicationRequestsDetail from './application-requests-detail';
import ApplicationRequestsUpdate from './application-requests-update';
import ApplicationRequestsDeleteDialog from './application-requests-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ApplicationRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ApplicationRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ApplicationRequestsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ApplicationRequests} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ApplicationRequestsDeleteDialog} />
  </>
);

export default Routes;
