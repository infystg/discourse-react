import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupsWebHooks from './groups-web-hooks';
import GroupsWebHooksDetail from './groups-web-hooks-detail';
import GroupsWebHooksUpdate from './groups-web-hooks-update';
import GroupsWebHooksDeleteDialog from './groups-web-hooks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupsWebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupsWebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupsWebHooksDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupsWebHooks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupsWebHooksDeleteDialog} />
  </>
);

export default Routes;
