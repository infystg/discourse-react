import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MessageBus from './message-bus';
import MessageBusDetail from './message-bus-detail';
import MessageBusUpdate from './message-bus-update';
import MessageBusDeleteDialog from './message-bus-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MessageBusUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MessageBusUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MessageBusDetail} />
      <ErrorBoundaryRoute path={match.url} component={MessageBus} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={MessageBusDeleteDialog} />
  </>
);

export default Routes;
