import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Groups from './groups';
import GroupsDetail from './groups-detail';
import GroupsUpdate from './groups-update';
import GroupsDeleteDialog from './groups-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Groups} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupsDeleteDialog} />
  </>
);

export default Routes;
