import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserOpenIds from './user-open-ids';
import UserOpenIdsDetail from './user-open-ids-detail';
import UserOpenIdsUpdate from './user-open-ids-update';
import UserOpenIdsDeleteDialog from './user-open-ids-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserOpenIdsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserOpenIdsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserOpenIdsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserOpenIds} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserOpenIdsDeleteDialog} />
  </>
);

export default Routes;
