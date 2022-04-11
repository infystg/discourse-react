import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoryGroups from './category-groups';
import CategoryGroupsDetail from './category-groups-detail';
import CategoryGroupsUpdate from './category-groups-update';
import CategoryGroupsDeleteDialog from './category-groups-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoryGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoryGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryGroupsDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoryGroups} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryGroupsDeleteDialog} />
  </>
);

export default Routes;
