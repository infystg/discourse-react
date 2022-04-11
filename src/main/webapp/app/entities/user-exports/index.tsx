import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserExports from './user-exports';
import UserExportsDetail from './user-exports-detail';
import UserExportsUpdate from './user-exports-update';
import UserExportsDeleteDialog from './user-exports-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserExportsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserExportsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserExportsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserExports} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserExportsDeleteDialog} />
  </>
);

export default Routes;
