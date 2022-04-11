import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Developers from './developers';
import DevelopersDetail from './developers-detail';
import DevelopersUpdate from './developers-update';
import DevelopersDeleteDialog from './developers-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DevelopersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DevelopersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DevelopersDetail} />
      <ErrorBoundaryRoute path={match.url} component={Developers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DevelopersDeleteDialog} />
  </>
);

export default Routes;
