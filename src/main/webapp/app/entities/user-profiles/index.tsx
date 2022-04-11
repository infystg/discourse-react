import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserProfiles from './user-profiles';
import UserProfilesDetail from './user-profiles-detail';
import UserProfilesUpdate from './user-profiles-update';
import UserProfilesDeleteDialog from './user-profiles-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserProfilesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserProfilesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserProfilesDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserProfiles} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserProfilesDeleteDialog} />
  </>
);

export default Routes;
