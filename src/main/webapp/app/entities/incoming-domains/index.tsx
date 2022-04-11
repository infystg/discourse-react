import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import IncomingDomains from './incoming-domains';
import IncomingDomainsDetail from './incoming-domains-detail';
import IncomingDomainsUpdate from './incoming-domains-update';
import IncomingDomainsDeleteDialog from './incoming-domains-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={IncomingDomainsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={IncomingDomainsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={IncomingDomainsDetail} />
      <ErrorBoundaryRoute path={match.url} component={IncomingDomains} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={IncomingDomainsDeleteDialog} />
  </>
);

export default Routes;
