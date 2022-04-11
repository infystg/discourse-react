import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Reviewables from './reviewables';
import ReviewablesDetail from './reviewables-detail';
import ReviewablesUpdate from './reviewables-update';
import ReviewablesDeleteDialog from './reviewables-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ReviewablesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ReviewablesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ReviewablesDetail} />
      <ErrorBoundaryRoute path={match.url} component={Reviewables} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ReviewablesDeleteDialog} />
  </>
);

export default Routes;
