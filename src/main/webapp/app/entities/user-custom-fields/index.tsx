import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserCustomFields from './user-custom-fields';
import UserCustomFieldsDetail from './user-custom-fields-detail';
import UserCustomFieldsUpdate from './user-custom-fields-update';
import UserCustomFieldsDeleteDialog from './user-custom-fields-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserCustomFieldsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserCustomFields} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserCustomFieldsDeleteDialog} />
  </>
);

export default Routes;
