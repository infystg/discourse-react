import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserSecurityKeys from './user-security-keys';
import UserSecurityKeysDetail from './user-security-keys-detail';
import UserSecurityKeysUpdate from './user-security-keys-update';
import UserSecurityKeysDeleteDialog from './user-security-keys-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserSecurityKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserSecurityKeysUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserSecurityKeysDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserSecurityKeys} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserSecurityKeysDeleteDialog} />
  </>
);

export default Routes;
