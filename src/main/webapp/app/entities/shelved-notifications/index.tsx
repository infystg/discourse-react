import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ShelvedNotifications from './shelved-notifications';
import ShelvedNotificationsDetail from './shelved-notifications-detail';
import ShelvedNotificationsUpdate from './shelved-notifications-update';
import ShelvedNotificationsDeleteDialog from './shelved-notifications-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ShelvedNotificationsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ShelvedNotificationsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ShelvedNotificationsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ShelvedNotifications} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ShelvedNotificationsDeleteDialog} />
  </>
);

export default Routes;
