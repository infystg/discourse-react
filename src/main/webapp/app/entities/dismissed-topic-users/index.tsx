import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import DismissedTopicUsers from './dismissed-topic-users';
import DismissedTopicUsersDetail from './dismissed-topic-users-detail';
import DismissedTopicUsersUpdate from './dismissed-topic-users-update';
import DismissedTopicUsersDeleteDialog from './dismissed-topic-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DismissedTopicUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DismissedTopicUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DismissedTopicUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={DismissedTopicUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DismissedTopicUsersDeleteDialog} />
  </>
);

export default Routes;
