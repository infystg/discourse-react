import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SharedDrafts from './shared-drafts';
import SharedDraftsDetail from './shared-drafts-detail';
import SharedDraftsUpdate from './shared-drafts-update';
import SharedDraftsDeleteDialog from './shared-drafts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SharedDraftsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SharedDraftsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SharedDraftsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SharedDrafts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SharedDraftsDeleteDialog} />
  </>
);

export default Routes;
