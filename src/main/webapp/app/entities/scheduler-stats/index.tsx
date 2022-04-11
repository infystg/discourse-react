import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SchedulerStats from './scheduler-stats';
import SchedulerStatsDetail from './scheduler-stats-detail';
import SchedulerStatsUpdate from './scheduler-stats-update';
import SchedulerStatsDeleteDialog from './scheduler-stats-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SchedulerStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SchedulerStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SchedulerStatsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SchedulerStats} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SchedulerStatsDeleteDialog} />
  </>
);

export default Routes;
