import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostStats from './post-stats';
import PostStatsDetail from './post-stats-detail';
import PostStatsUpdate from './post-stats-update';
import PostStatsDeleteDialog from './post-stats-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostStatsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostStatsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostStats} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostStatsDeleteDialog} />
  </>
);

export default Routes;
