import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ArInternalMetadata from './ar-internal-metadata';
import ArInternalMetadataDetail from './ar-internal-metadata-detail';
import ArInternalMetadataUpdate from './ar-internal-metadata-update';
import ArInternalMetadataDeleteDialog from './ar-internal-metadata-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ArInternalMetadataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ArInternalMetadataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ArInternalMetadataDetail} />
      <ErrorBoundaryRoute path={match.url} component={ArInternalMetadata} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ArInternalMetadataDeleteDialog} />
  </>
);

export default Routes;
