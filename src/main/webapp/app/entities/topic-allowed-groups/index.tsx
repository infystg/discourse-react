import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicAllowedGroups from './topic-allowed-groups';
import TopicAllowedGroupsDetail from './topic-allowed-groups-detail';
import TopicAllowedGroupsUpdate from './topic-allowed-groups-update';
import TopicAllowedGroupsDeleteDialog from './topic-allowed-groups-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicAllowedGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicAllowedGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicAllowedGroupsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicAllowedGroups} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicAllowedGroupsDeleteDialog} />
  </>
);

export default Routes;
