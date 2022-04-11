import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EmailLogs from './email-logs';
import EmailLogsDetail from './email-logs-detail';
import EmailLogsUpdate from './email-logs-update';
import EmailLogsDeleteDialog from './email-logs-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EmailLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EmailLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EmailLogsDetail} />
      <ErrorBoundaryRoute path={match.url} component={EmailLogs} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EmailLogsDeleteDialog} />
  </>
);

export default Routes;
