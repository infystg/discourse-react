import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import IncomingEmails from './incoming-emails';
import IncomingEmailsDetail from './incoming-emails-detail';
import IncomingEmailsUpdate from './incoming-emails-update';
import IncomingEmailsDeleteDialog from './incoming-emails-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={IncomingEmailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={IncomingEmailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={IncomingEmailsDetail} />
      <ErrorBoundaryRoute path={match.url} component={IncomingEmails} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={IncomingEmailsDeleteDialog} />
  </>
);

export default Routes;
