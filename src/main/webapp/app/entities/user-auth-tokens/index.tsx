import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserAuthTokens from './user-auth-tokens';
import UserAuthTokensDetail from './user-auth-tokens-detail';
import UserAuthTokensUpdate from './user-auth-tokens-update';
import UserAuthTokensDeleteDialog from './user-auth-tokens-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserAuthTokensUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserAuthTokensUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserAuthTokensDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserAuthTokens} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserAuthTokensDeleteDialog} />
  </>
);

export default Routes;
