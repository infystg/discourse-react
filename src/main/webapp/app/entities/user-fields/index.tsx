import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserFields from './user-fields';
import UserFieldsDetail from './user-fields-detail';
import UserFieldsUpdate from './user-fields-update';
import UserFieldsDeleteDialog from './user-fields-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserFieldsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserFields} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserFieldsDeleteDialog} />
  </>
);

export default Routes;
