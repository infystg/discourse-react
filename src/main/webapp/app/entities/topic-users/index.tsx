import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicUsers from './topic-users';
import TopicUsersDetail from './topic-users-detail';
import TopicUsersUpdate from './topic-users-update';
import TopicUsersDeleteDialog from './topic-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicUsersDeleteDialog} />
  </>
);

export default Routes;
