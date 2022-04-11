import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import StylesheetCache from './stylesheet-cache';
import StylesheetCacheDetail from './stylesheet-cache-detail';
import StylesheetCacheUpdate from './stylesheet-cache-update';
import StylesheetCacheDeleteDialog from './stylesheet-cache-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={StylesheetCacheUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={StylesheetCacheUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={StylesheetCacheDetail} />
      <ErrorBoundaryRoute path={match.url} component={StylesheetCache} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={StylesheetCacheDeleteDialog} />
  </>
);

export default Routes;
