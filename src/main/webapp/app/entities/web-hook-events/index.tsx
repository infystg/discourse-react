import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WebHookEvents from './web-hook-events';
import WebHookEventsDetail from './web-hook-events-detail';
import WebHookEventsUpdate from './web-hook-events-update';
import WebHookEventsDeleteDialog from './web-hook-events-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WebHookEventsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WebHookEventsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WebHookEventsDetail} />
      <ErrorBoundaryRoute path={match.url} component={WebHookEvents} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WebHookEventsDeleteDialog} />
  </>
);

export default Routes;
