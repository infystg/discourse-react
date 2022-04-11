import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BackupDraftTopics from './backup-draft-topics';
import BackupDraftTopicsDetail from './backup-draft-topics-detail';
import BackupDraftTopicsUpdate from './backup-draft-topics-update';
import BackupDraftTopicsDeleteDialog from './backup-draft-topics-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BackupDraftTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BackupDraftTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BackupDraftTopicsDetail} />
      <ErrorBoundaryRoute path={match.url} component={BackupDraftTopics} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BackupDraftTopicsDeleteDialog} />
  </>
);

export default Routes;
