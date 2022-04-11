import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicAllowedUsers from './topic-allowed-users';
import TopicAllowedUsersDetail from './topic-allowed-users-detail';
import TopicAllowedUsersUpdate from './topic-allowed-users-update';
import TopicAllowedUsersDeleteDialog from './topic-allowed-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicAllowedUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicAllowedUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicAllowedUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicAllowedUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicAllowedUsersDeleteDialog} />
  </>
);

export default Routes;
