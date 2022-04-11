import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ApiKeyScopes from './api-key-scopes';
import ApiKeyScopesDetail from './api-key-scopes-detail';
import ApiKeyScopesUpdate from './api-key-scopes-update';
import ApiKeyScopesDeleteDialog from './api-key-scopes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ApiKeyScopesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ApiKeyScopesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ApiKeyScopesDetail} />
      <ErrorBoundaryRoute path={match.url} component={ApiKeyScopes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ApiKeyScopesDeleteDialog} />
  </>
);

export default Routes;
