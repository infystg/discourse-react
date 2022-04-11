import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ReviewableHistories from './reviewable-histories';
import ReviewableHistoriesDetail from './reviewable-histories-detail';
import ReviewableHistoriesUpdate from './reviewable-histories-update';
import ReviewableHistoriesDeleteDialog from './reviewable-histories-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ReviewableHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ReviewableHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ReviewableHistoriesDetail} />
      <ErrorBoundaryRoute path={match.url} component={ReviewableHistories} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ReviewableHistoriesDeleteDialog} />
  </>
);

export default Routes;
