import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import IncomingLinks from './incoming-links';
import IncomingLinksDetail from './incoming-links-detail';
import IncomingLinksUpdate from './incoming-links-update';
import IncomingLinksDeleteDialog from './incoming-links-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={IncomingLinksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={IncomingLinksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={IncomingLinksDetail} />
      <ErrorBoundaryRoute path={match.url} component={IncomingLinks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={IncomingLinksDeleteDialog} />
  </>
);

export default Routes;
