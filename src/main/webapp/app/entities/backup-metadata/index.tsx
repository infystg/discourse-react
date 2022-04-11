import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BackupMetadata from './backup-metadata';
import BackupMetadataDetail from './backup-metadata-detail';
import BackupMetadataUpdate from './backup-metadata-update';
import BackupMetadataDeleteDialog from './backup-metadata-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BackupMetadataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BackupMetadataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BackupMetadataDetail} />
      <ErrorBoundaryRoute path={match.url} component={BackupMetadata} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BackupMetadataDeleteDialog} />
  </>
);

export default Routes;
