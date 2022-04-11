import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostDetails from './post-details';
import PostDetailsDetail from './post-details-detail';
import PostDetailsUpdate from './post-details-update';
import PostDetailsDeleteDialog from './post-details-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostDetailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostDetailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostDetailsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostDetails} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostDetailsDeleteDialog} />
  </>
);

export default Routes;
