import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserIpAddressHistories from './user-ip-address-histories';
import UserIpAddressHistoriesDetail from './user-ip-address-histories-detail';
import UserIpAddressHistoriesUpdate from './user-ip-address-histories-update';
import UserIpAddressHistoriesDeleteDialog from './user-ip-address-histories-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserIpAddressHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserIpAddressHistoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserIpAddressHistoriesDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserIpAddressHistories} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserIpAddressHistoriesDeleteDialog} />
  </>
);

export default Routes;
