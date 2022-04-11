import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ScreenedEmails from './screened-emails';
import ScreenedEmailsDetail from './screened-emails-detail';
import ScreenedEmailsUpdate from './screened-emails-update';
import ScreenedEmailsDeleteDialog from './screened-emails-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ScreenedEmailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ScreenedEmailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ScreenedEmailsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ScreenedEmails} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ScreenedEmailsDeleteDialog} />
  </>
);

export default Routes;
