import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import IncomingReferers from './incoming-referers';
import IncomingReferersDetail from './incoming-referers-detail';
import IncomingReferersUpdate from './incoming-referers-update';
import IncomingReferersDeleteDialog from './incoming-referers-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={IncomingReferersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={IncomingReferersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={IncomingReferersDetail} />
      <ErrorBoundaryRoute path={match.url} component={IncomingReferers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={IncomingReferersDeleteDialog} />
  </>
);

export default Routes;
