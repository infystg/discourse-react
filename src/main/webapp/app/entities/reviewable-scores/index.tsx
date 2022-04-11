import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ReviewableScores from './reviewable-scores';
import ReviewableScoresDetail from './reviewable-scores-detail';
import ReviewableScoresUpdate from './reviewable-scores-update';
import ReviewableScoresDeleteDialog from './reviewable-scores-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ReviewableScoresUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ReviewableScoresUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ReviewableScoresDetail} />
      <ErrorBoundaryRoute path={match.url} component={ReviewableScores} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ReviewableScoresDeleteDialog} />
  </>
);

export default Routes;
