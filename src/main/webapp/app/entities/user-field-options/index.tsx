import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserFieldOptions from './user-field-options';
import UserFieldOptionsDetail from './user-field-options-detail';
import UserFieldOptionsUpdate from './user-field-options-update';
import UserFieldOptionsDeleteDialog from './user-field-options-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserFieldOptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserFieldOptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserFieldOptionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserFieldOptions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserFieldOptionsDeleteDialog} />
  </>
);

export default Routes;
