import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicGroups from './topic-groups';
import TopicGroupsDetail from './topic-groups-detail';
import TopicGroupsUpdate from './topic-groups-update';
import TopicGroupsDeleteDialog from './topic-groups-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicGroupsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicGroupsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicGroups} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicGroupsDeleteDialog} />
  </>
);

export default Routes;
