import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupCustomFields from './group-custom-fields';
import GroupCustomFieldsDetail from './group-custom-fields-detail';
import GroupCustomFieldsUpdate from './group-custom-fields-update';
import GroupCustomFieldsDeleteDialog from './group-custom-fields-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupCustomFieldsDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupCustomFields} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupCustomFieldsDeleteDialog} />
  </>
);

export default Routes;
