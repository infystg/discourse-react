import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BadgeTypes from './badge-types';
import BadgeTypesDetail from './badge-types-detail';
import BadgeTypesUpdate from './badge-types-update';
import BadgeTypesDeleteDialog from './badge-types-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BadgeTypesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BadgeTypesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BadgeTypesDetail} />
      <ErrorBoundaryRoute path={match.url} component={BadgeTypes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BadgeTypesDeleteDialog} />
  </>
);

export default Routes;
