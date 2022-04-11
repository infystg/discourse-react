import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SkippedEmailLogs from './skipped-email-logs';
import SkippedEmailLogsDetail from './skipped-email-logs-detail';
import SkippedEmailLogsUpdate from './skipped-email-logs-update';
import SkippedEmailLogsDeleteDialog from './skipped-email-logs-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SkippedEmailLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SkippedEmailLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SkippedEmailLogsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SkippedEmailLogs} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SkippedEmailLogsDeleteDialog} />
  </>
);

export default Routes;
