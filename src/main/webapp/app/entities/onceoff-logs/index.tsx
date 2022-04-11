import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import OnceoffLogs from './onceoff-logs';
import OnceoffLogsDetail from './onceoff-logs-detail';
import OnceoffLogsUpdate from './onceoff-logs-update';
import OnceoffLogsDeleteDialog from './onceoff-logs-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={OnceoffLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={OnceoffLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={OnceoffLogsDetail} />
      <ErrorBoundaryRoute path={match.url} component={OnceoffLogs} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={OnceoffLogsDeleteDialog} />
  </>
);

export default Routes;
