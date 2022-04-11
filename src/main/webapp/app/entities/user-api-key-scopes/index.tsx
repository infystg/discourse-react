import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserApiKeyScopes from './user-api-key-scopes';
import UserApiKeyScopesDetail from './user-api-key-scopes-detail';
import UserApiKeyScopesUpdate from './user-api-key-scopes-update';
import UserApiKeyScopesDeleteDialog from './user-api-key-scopes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserApiKeyScopesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserApiKeyScopesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserApiKeyScopesDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserApiKeyScopes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserApiKeyScopesDeleteDialog} />
  </>
);

export default Routes;
