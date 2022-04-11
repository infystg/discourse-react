import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GivenDailyLikes from './given-daily-likes';
import GivenDailyLikesDetail from './given-daily-likes-detail';
import GivenDailyLikesUpdate from './given-daily-likes-update';
import GivenDailyLikesDeleteDialog from './given-daily-likes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GivenDailyLikesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GivenDailyLikesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GivenDailyLikesDetail} />
      <ErrorBoundaryRoute path={match.url} component={GivenDailyLikes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GivenDailyLikesDeleteDialog} />
  </>
);

export default Routes;
