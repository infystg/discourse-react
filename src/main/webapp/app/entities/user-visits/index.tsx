import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserVisits from './user-visits';
import UserVisitsDetail from './user-visits-detail';
import UserVisitsUpdate from './user-visits-update';
import UserVisitsDeleteDialog from './user-visits-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserVisitsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserVisitsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserVisitsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserVisits} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserVisitsDeleteDialog} />
  </>
);

export default Routes;
