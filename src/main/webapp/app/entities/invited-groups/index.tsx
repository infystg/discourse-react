import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import InvitedGroups from './invited-groups';
import InvitedGroupsDetail from './invited-groups-detail';
import InvitedGroupsUpdate from './invited-groups-update';
import InvitedGroupsDeleteDialog from './invited-groups-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={InvitedGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={InvitedGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={InvitedGroupsDetail} />
      <ErrorBoundaryRoute path={match.url} component={InvitedGroups} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={InvitedGroupsDeleteDialog} />
  </>
);

export default Routes;
