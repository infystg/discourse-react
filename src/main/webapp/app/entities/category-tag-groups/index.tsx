import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoryTagGroups from './category-tag-groups';
import CategoryTagGroupsDetail from './category-tag-groups-detail';
import CategoryTagGroupsUpdate from './category-tag-groups-update';
import CategoryTagGroupsDeleteDialog from './category-tag-groups-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoryTagGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoryTagGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryTagGroupsDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoryTagGroups} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryTagGroupsDeleteDialog} />
  </>
);

export default Routes;
