import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import DoNotDisturbTimings from './do-not-disturb-timings';
import DoNotDisturbTimingsDetail from './do-not-disturb-timings-detail';
import DoNotDisturbTimingsUpdate from './do-not-disturb-timings-update';
import DoNotDisturbTimingsDeleteDialog from './do-not-disturb-timings-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DoNotDisturbTimingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DoNotDisturbTimingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DoNotDisturbTimingsDetail} />
      <ErrorBoundaryRoute path={match.url} component={DoNotDisturbTimings} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DoNotDisturbTimingsDeleteDialog} />
  </>
);

export default Routes;
