import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserUploads from './user-uploads';
import UserUploadsDetail from './user-uploads-detail';
import UserUploadsUpdate from './user-uploads-update';
import UserUploadsDeleteDialog from './user-uploads-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserUploadsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserUploadsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserUploadsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserUploads} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserUploadsDeleteDialog} />
  </>
);

export default Routes;
