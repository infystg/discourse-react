import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Polls from './polls';
import PollsDetail from './polls-detail';
import PollsUpdate from './polls-update';
import PollsDeleteDialog from './polls-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PollsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PollsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PollsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Polls} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PollsDeleteDialog} />
  </>
);

export default Routes;
