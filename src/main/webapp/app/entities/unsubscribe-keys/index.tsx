import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UnsubscribeKeys from './unsubscribe-keys';
import UnsubscribeKeysDetail from './unsubscribe-keys-detail';
import UnsubscribeKeysUpdate from './unsubscribe-keys-update';
import UnsubscribeKeysDeleteDialog from './unsubscribe-keys-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UnsubscribeKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UnsubscribeKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UnsubscribeKeysDetail} />
      <ErrorBoundaryRoute path={match.url} component={UnsubscribeKeys} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UnsubscribeKeysDeleteDialog} />
  </>
);

export default Routes;
