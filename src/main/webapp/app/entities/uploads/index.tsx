import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Uploads from './uploads';
import UploadsDetail from './uploads-detail';
import UploadsUpdate from './uploads-update';
import UploadsDeleteDialog from './uploads-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UploadsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UploadsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UploadsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Uploads} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UploadsDeleteDialog} />
  </>
);

export default Routes;
