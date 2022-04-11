import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TagGroupPermissions from './tag-group-permissions';
import TagGroupPermissionsDetail from './tag-group-permissions-detail';
import TagGroupPermissionsUpdate from './tag-group-permissions-update';
import TagGroupPermissionsDeleteDialog from './tag-group-permissions-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TagGroupPermissionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TagGroupPermissionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TagGroupPermissionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TagGroupPermissions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TagGroupPermissionsDeleteDialog} />
  </>
);

export default Routes;
