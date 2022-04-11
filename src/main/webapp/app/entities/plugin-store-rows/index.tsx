import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PluginStoreRows from './plugin-store-rows';
import PluginStoreRowsDetail from './plugin-store-rows-detail';
import PluginStoreRowsUpdate from './plugin-store-rows-update';
import PluginStoreRowsDeleteDialog from './plugin-store-rows-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PluginStoreRowsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PluginStoreRowsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PluginStoreRowsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PluginStoreRows} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PluginStoreRowsDeleteDialog} />
  </>
);

export default Routes;
