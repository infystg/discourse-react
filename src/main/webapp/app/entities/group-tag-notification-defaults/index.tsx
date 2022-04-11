import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupTagNotificationDefaults from './group-tag-notification-defaults';
import GroupTagNotificationDefaultsDetail from './group-tag-notification-defaults-detail';
import GroupTagNotificationDefaultsUpdate from './group-tag-notification-defaults-update';
import GroupTagNotificationDefaultsDeleteDialog from './group-tag-notification-defaults-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupTagNotificationDefaultsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupTagNotificationDefaultsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupTagNotificationDefaultsDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupTagNotificationDefaults} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupTagNotificationDefaultsDeleteDialog} />
  </>
);

export default Routes;
