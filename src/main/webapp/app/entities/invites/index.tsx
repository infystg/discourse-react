import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Invites from './invites';
import InvitesDetail from './invites-detail';
import InvitesUpdate from './invites-update';
import InvitesDeleteDialog from './invites-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={InvitesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={InvitesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={InvitesDetail} />
      <ErrorBoundaryRoute path={match.url} component={Invites} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={InvitesDeleteDialog} />
  </>
);

export default Routes;
