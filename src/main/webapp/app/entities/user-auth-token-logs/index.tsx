import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserAuthTokenLogs from './user-auth-token-logs';
import UserAuthTokenLogsDetail from './user-auth-token-logs-detail';
import UserAuthTokenLogsUpdate from './user-auth-token-logs-update';
import UserAuthTokenLogsDeleteDialog from './user-auth-token-logs-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserAuthTokenLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserAuthTokenLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserAuthTokenLogsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserAuthTokenLogs} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserAuthTokenLogsDeleteDialog} />
  </>
);

export default Routes;
