import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PollVotes from './poll-votes';
import PollVotesDetail from './poll-votes-detail';
import PollVotesUpdate from './poll-votes-update';
import PollVotesDeleteDialog from './poll-votes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PollVotesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PollVotesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PollVotesDetail} />
      <ErrorBoundaryRoute path={match.url} component={PollVotes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PollVotesDeleteDialog} />
  </>
);

export default Routes;
