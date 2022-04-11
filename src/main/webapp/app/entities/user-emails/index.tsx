import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserEmails from './user-emails';
import UserEmailsDetail from './user-emails-detail';
import UserEmailsUpdate from './user-emails-update';
import UserEmailsDeleteDialog from './user-emails-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserEmailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserEmailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserEmailsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserEmails} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserEmailsDeleteDialog} />
  </>
);

export default Routes;
