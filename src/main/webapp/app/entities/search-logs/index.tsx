import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SearchLogs from './search-logs';
import SearchLogsDetail from './search-logs-detail';
import SearchLogsUpdate from './search-logs-update';
import SearchLogsDeleteDialog from './search-logs-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SearchLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SearchLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SearchLogsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SearchLogs} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SearchLogsDeleteDialog} />
  </>
);

export default Routes;
