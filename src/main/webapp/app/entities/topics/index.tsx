import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Topics from './topics';
import TopicsDetail from './topics-detail';
import TopicsUpdate from './topics-update';
import TopicsDeleteDialog from './topics-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Topics} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicsDeleteDialog} />
  </>
);

export default Routes;
