import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EmailTokens from './email-tokens';
import EmailTokensDetail from './email-tokens-detail';
import EmailTokensUpdate from './email-tokens-update';
import EmailTokensDeleteDialog from './email-tokens-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EmailTokensUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EmailTokensUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EmailTokensDetail} />
      <ErrorBoundaryRoute path={match.url} component={EmailTokens} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EmailTokensDeleteDialog} />
  </>
);

export default Routes;
