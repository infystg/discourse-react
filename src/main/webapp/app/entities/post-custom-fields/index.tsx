import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostCustomFields from './post-custom-fields';
import PostCustomFieldsDetail from './post-custom-fields-detail';
import PostCustomFieldsUpdate from './post-custom-fields-update';
import PostCustomFieldsDeleteDialog from './post-custom-fields-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostCustomFieldsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostCustomFields} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostCustomFieldsDeleteDialog} />
  </>
);

export default Routes;
