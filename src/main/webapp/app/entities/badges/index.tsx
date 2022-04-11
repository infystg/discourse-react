import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Badges from './badges';
import BadgesDetail from './badges-detail';
import BadgesUpdate from './badges-update';
import BadgesDeleteDialog from './badges-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BadgesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BadgesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BadgesDetail} />
      <ErrorBoundaryRoute path={match.url} component={Badges} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BadgesDeleteDialog} />
  </>
);

export default Routes;
