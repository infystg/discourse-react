import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupHistories from './group-histories';
import GroupHistoriesDetail from './group-histories-detail';
import GroupHistoriesUpdate from './group-histories-update';
import GroupHistoriesDeleteDialog from './group-histories-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupHistoriesDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupHistories} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupHistoriesDeleteDialog} />
  </>
);

export default Routes;
