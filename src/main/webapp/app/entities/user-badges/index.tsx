import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserBadges from './user-badges';
import UserBadgesDetail from './user-badges-detail';
import UserBadgesUpdate from './user-badges-update';
import UserBadgesDeleteDialog from './user-badges-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserBadgesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserBadgesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserBadgesDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserBadges} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserBadgesDeleteDialog} />
  </>
);

export default Routes;
