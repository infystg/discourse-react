import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import OptimizedImages from './optimized-images';
import OptimizedImagesDetail from './optimized-images-detail';
import OptimizedImagesUpdate from './optimized-images-update';
import OptimizedImagesDeleteDialog from './optimized-images-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={OptimizedImagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={OptimizedImagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={OptimizedImagesDetail} />
      <ErrorBoundaryRoute path={match.url} component={OptimizedImages} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={OptimizedImagesDeleteDialog} />
  </>
);

export default Routes;
