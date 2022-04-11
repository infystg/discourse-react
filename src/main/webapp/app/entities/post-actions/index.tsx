import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostActions from './post-actions';
import PostActionsDetail from './post-actions-detail';
import PostActionsUpdate from './post-actions-update';
import PostActionsDeleteDialog from './post-actions-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostActionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostActionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostActionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostActions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostActionsDeleteDialog} />
  </>
);

export default Routes;
