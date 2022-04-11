import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostActionTypes from './post-action-types';
import PostActionTypesDetail from './post-action-types-detail';
import PostActionTypesUpdate from './post-action-types-update';
import PostActionTypesDeleteDialog from './post-action-types-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostActionTypesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostActionTypesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostActionTypesDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostActionTypes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostActionTypesDeleteDialog} />
  </>
);

export default Routes;
