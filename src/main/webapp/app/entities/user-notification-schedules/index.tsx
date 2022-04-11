import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserNotificationSchedules from './user-notification-schedules';
import UserNotificationSchedulesDetail from './user-notification-schedules-detail';
import UserNotificationSchedulesUpdate from './user-notification-schedules-update';
import UserNotificationSchedulesDeleteDialog from './user-notification-schedules-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserNotificationSchedulesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserNotificationSchedulesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserNotificationSchedulesDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserNotificationSchedules} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserNotificationSchedulesDeleteDialog} />
  </>
);

export default Routes;
