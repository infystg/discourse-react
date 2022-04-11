import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SchemaMigrationDetails from './schema-migration-details';
import SchemaMigrationDetailsDetail from './schema-migration-details-detail';
import SchemaMigrationDetailsUpdate from './schema-migration-details-update';
import SchemaMigrationDetailsDeleteDialog from './schema-migration-details-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SchemaMigrationDetailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SchemaMigrationDetailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SchemaMigrationDetailsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SchemaMigrationDetails} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SchemaMigrationDetailsDeleteDialog} />
  </>
);

export default Routes;
