import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostTimings from './post-timings';
import PostTimingsDetail from './post-timings-detail';
import PostTimingsUpdate from './post-timings-update';
import PostTimingsDeleteDialog from './post-timings-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostTimingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostTimingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostTimingsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostTimings} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostTimingsDeleteDialog} />
  </>
);

export default Routes;
