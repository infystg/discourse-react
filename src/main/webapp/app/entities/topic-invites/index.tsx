import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicInvites from './topic-invites';
import TopicInvitesDetail from './topic-invites-detail';
import TopicInvitesUpdate from './topic-invites-update';
import TopicInvitesDeleteDialog from './topic-invites-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicInvitesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicInvitesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicInvitesDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicInvites} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicInvitesDeleteDialog} />
  </>
);

export default Routes;
