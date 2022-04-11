import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TagGroups from './tag-groups';
import TagGroupsDetail from './tag-groups-detail';
import TagGroupsUpdate from './tag-groups-update';
import TagGroupsDeleteDialog from './tag-groups-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TagGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TagGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TagGroupsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TagGroups} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TagGroupsDeleteDialog} />
  </>
);

export default Routes;
