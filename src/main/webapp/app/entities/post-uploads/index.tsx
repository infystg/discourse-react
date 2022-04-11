import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostUploads from './post-uploads';
import PostUploadsDetail from './post-uploads-detail';
import PostUploadsUpdate from './post-uploads-update';
import PostUploadsDeleteDialog from './post-uploads-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostUploadsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostUploadsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostUploadsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostUploads} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostUploadsDeleteDialog} />
  </>
);

export default Routes;
