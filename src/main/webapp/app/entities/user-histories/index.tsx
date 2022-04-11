import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserHistories from './user-histories';
import UserHistoriesDetail from './user-histories-detail';
import UserHistoriesUpdate from './user-histories-update';
import UserHistoriesDeleteDialog from './user-histories-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserHistoriesDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserHistories} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserHistoriesDeleteDialog} />
  </>
);

export default Routes;
