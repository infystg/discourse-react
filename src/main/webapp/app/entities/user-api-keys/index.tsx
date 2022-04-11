import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserApiKeys from './user-api-keys';
import UserApiKeysDetail from './user-api-keys-detail';
import UserApiKeysUpdate from './user-api-keys-update';
import UserApiKeysDeleteDialog from './user-api-keys-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserApiKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserApiKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserApiKeysDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserApiKeys} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserApiKeysDeleteDialog} />
  </>
);

export default Routes;
