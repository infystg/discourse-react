import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import LinkedTopics from './linked-topics';
import LinkedTopicsDetail from './linked-topics-detail';
import LinkedTopicsUpdate from './linked-topics-update';
import LinkedTopicsDeleteDialog from './linked-topics-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={LinkedTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={LinkedTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={LinkedTopicsDetail} />
      <ErrorBoundaryRoute path={match.url} component={LinkedTopics} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={LinkedTopicsDeleteDialog} />
  </>
);

export default Routes;
