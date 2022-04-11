import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoryCustomFields from './category-custom-fields';
import CategoryCustomFieldsDetail from './category-custom-fields-detail';
import CategoryCustomFieldsUpdate from './category-custom-fields-update';
import CategoryCustomFieldsDeleteDialog from './category-custom-fields-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoryCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoryCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryCustomFieldsDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoryCustomFields} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryCustomFieldsDeleteDialog} />
  </>
);

export default Routes;
