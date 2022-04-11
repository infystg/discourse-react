import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupCategoryNotificationDefaults from './group-category-notification-defaults';
import GroupCategoryNotificationDefaultsDetail from './group-category-notification-defaults-detail';
import GroupCategoryNotificationDefaultsUpdate from './group-category-notification-defaults-update';
import GroupCategoryNotificationDefaultsDeleteDialog from './group-category-notification-defaults-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupCategoryNotificationDefaultsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupCategoryNotificationDefaultsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupCategoryNotificationDefaultsDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupCategoryNotificationDefaults} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupCategoryNotificationDefaultsDeleteDialog} />
  </>
);

export default Routes;
