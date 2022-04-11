import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PushSubscriptions from './push-subscriptions';
import PushSubscriptionsDetail from './push-subscriptions-detail';
import PushSubscriptionsUpdate from './push-subscriptions-update';
import PushSubscriptionsDeleteDialog from './push-subscriptions-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PushSubscriptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PushSubscriptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PushSubscriptionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PushSubscriptions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PushSubscriptionsDeleteDialog} />
  </>
);

export default Routes;
