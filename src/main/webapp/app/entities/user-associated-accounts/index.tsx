import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserAssociatedAccounts from './user-associated-accounts';
import UserAssociatedAccountsDetail from './user-associated-accounts-detail';
import UserAssociatedAccountsUpdate from './user-associated-accounts-update';
import UserAssociatedAccountsDeleteDialog from './user-associated-accounts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserAssociatedAccountsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserAssociatedAccountsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserAssociatedAccountsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserAssociatedAccounts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserAssociatedAccountsDeleteDialog} />
  </>
);

export default Routes;
