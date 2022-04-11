import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserStats from './user-stats';
import UserStatsDetail from './user-stats-detail';
import UserStatsUpdate from './user-stats-update';
import UserStatsDeleteDialog from './user-stats-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserStatsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserStats} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserStatsDeleteDialog} />
  </>
);

export default Routes;
