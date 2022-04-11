import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ImapSyncLogs from './imap-sync-logs';
import ImapSyncLogsDetail from './imap-sync-logs-detail';
import ImapSyncLogsUpdate from './imap-sync-logs-update';
import ImapSyncLogsDeleteDialog from './imap-sync-logs-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ImapSyncLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ImapSyncLogsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ImapSyncLogsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ImapSyncLogs} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ImapSyncLogsDeleteDialog} />
  </>
);

export default Routes;
