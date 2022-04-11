import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ReviewableClaimedTopics from './reviewable-claimed-topics';
import ReviewableClaimedTopicsDetail from './reviewable-claimed-topics-detail';
import ReviewableClaimedTopicsUpdate from './reviewable-claimed-topics-update';
import ReviewableClaimedTopicsDeleteDialog from './reviewable-claimed-topics-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ReviewableClaimedTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ReviewableClaimedTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ReviewableClaimedTopicsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ReviewableClaimedTopics} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ReviewableClaimedTopicsDeleteDialog} />
  </>
);

export default Routes;
