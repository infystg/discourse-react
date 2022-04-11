import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopTopics from './top-topics';
import TopTopicsDetail from './top-topics-detail';
import TopTopicsUpdate from './top-topics-update';
import TopTopicsDeleteDialog from './top-topics-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopTopicsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopTopics} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopTopicsDeleteDialog} />
  </>
);

export default Routes;
