import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PollOptions from './poll-options';
import PollOptionsDetail from './poll-options-detail';
import PollOptionsUpdate from './poll-options-update';
import PollOptionsDeleteDialog from './poll-options-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PollOptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PollOptionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PollOptionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PollOptions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PollOptionsDeleteDialog} />
  </>
);

export default Routes;
