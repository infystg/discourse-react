import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoryTagStats from './category-tag-stats';
import CategoryTagStatsDetail from './category-tag-stats-detail';
import CategoryTagStatsUpdate from './category-tag-stats-update';
import CategoryTagStatsDeleteDialog from './category-tag-stats-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoryTagStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoryTagStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryTagStatsDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoryTagStats} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryTagStatsDeleteDialog} />
  </>
);

export default Routes;
