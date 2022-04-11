import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserProfileViews from './user-profile-views';
import UserProfileViewsDetail from './user-profile-views-detail';
import UserProfileViewsUpdate from './user-profile-views-update';
import UserProfileViewsDeleteDialog from './user-profile-views-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserProfileViewsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserProfileViewsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserProfileViewsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserProfileViews} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserProfileViewsDeleteDialog} />
  </>
);

export default Routes;
