import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Drafts from './drafts';
import DraftsDetail from './drafts-detail';
import DraftsUpdate from './drafts-update';
import DraftsDeleteDialog from './drafts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DraftsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DraftsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DraftsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Drafts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DraftsDeleteDialog} />
  </>
);

export default Routes;
