import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SchemaMigrations from './schema-migrations';
import SchemaMigrationsDetail from './schema-migrations-detail';
import SchemaMigrationsUpdate from './schema-migrations-update';
import SchemaMigrationsDeleteDialog from './schema-migrations-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SchemaMigrationsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SchemaMigrationsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SchemaMigrationsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SchemaMigrations} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SchemaMigrationsDeleteDialog} />
  </>
);

export default Routes;
