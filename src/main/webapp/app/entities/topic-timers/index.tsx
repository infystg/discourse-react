import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicTimers from './topic-timers';
import TopicTimersDetail from './topic-timers-detail';
import TopicTimersUpdate from './topic-timers-update';
import TopicTimersDeleteDialog from './topic-timers-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicTimersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicTimersUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicTimersDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicTimers} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicTimersDeleteDialog} />
  </>
);

export default Routes;
