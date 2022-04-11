import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ApiKeys from './api-keys';
import ApiKeysDetail from './api-keys-detail';
import ApiKeysUpdate from './api-keys-update';
import ApiKeysDeleteDialog from './api-keys-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ApiKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ApiKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ApiKeysDetail} />
      <ErrorBoundaryRoute path={match.url} component={ApiKeys} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ApiKeysDeleteDialog} />
  </>
);

export default Routes;
