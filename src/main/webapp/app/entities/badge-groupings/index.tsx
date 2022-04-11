import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BadgeGroupings from './badge-groupings';
import BadgeGroupingsDetail from './badge-groupings-detail';
import BadgeGroupingsUpdate from './badge-groupings-update';
import BadgeGroupingsDeleteDialog from './badge-groupings-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BadgeGroupingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BadgeGroupingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BadgeGroupingsDetail} />
      <ErrorBoundaryRoute path={match.url} component={BadgeGroupings} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BadgeGroupingsDeleteDialog} />
  </>
);

export default Routes;
