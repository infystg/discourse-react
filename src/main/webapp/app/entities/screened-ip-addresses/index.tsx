import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ScreenedIpAddresses from './screened-ip-addresses';
import ScreenedIpAddressesDetail from './screened-ip-addresses-detail';
import ScreenedIpAddressesUpdate from './screened-ip-addresses-update';
import ScreenedIpAddressesDeleteDialog from './screened-ip-addresses-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ScreenedIpAddressesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ScreenedIpAddressesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ScreenedIpAddressesDetail} />
      <ErrorBoundaryRoute path={match.url} component={ScreenedIpAddresses} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ScreenedIpAddressesDeleteDialog} />
  </>
);

export default Routes;
