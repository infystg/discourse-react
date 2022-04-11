import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Notifications from './notifications';
import NotificationsDetail from './notifications-detail';
import NotificationsUpdate from './notifications-update';
import NotificationsDeleteDialog from './notifications-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={NotificationsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={NotificationsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={NotificationsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Notifications} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={NotificationsDeleteDialog} />
  </>
);

export default Routes;
