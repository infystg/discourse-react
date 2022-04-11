import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EmailChangeRequests from './email-change-requests';
import EmailChangeRequestsDetail from './email-change-requests-detail';
import EmailChangeRequestsUpdate from './email-change-requests-update';
import EmailChangeRequestsDeleteDialog from './email-change-requests-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EmailChangeRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EmailChangeRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EmailChangeRequestsDetail} />
      <ErrorBoundaryRoute path={match.url} component={EmailChangeRequests} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EmailChangeRequestsDeleteDialog} />
  </>
);

export default Routes;
