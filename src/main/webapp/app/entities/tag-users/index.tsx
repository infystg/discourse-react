import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TagUsers from './tag-users';
import TagUsersDetail from './tag-users-detail';
import TagUsersUpdate from './tag-users-update';
import TagUsersDeleteDialog from './tag-users-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TagUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TagUsersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TagUsersDetail} />
      <ErrorBoundaryRoute path={match.url} component={TagUsers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TagUsersDeleteDialog} />
  </>
);

export default Routes;
