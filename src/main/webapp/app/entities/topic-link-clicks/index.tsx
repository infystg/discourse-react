import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicLinkClicks from './topic-link-clicks';
import TopicLinkClicksDetail from './topic-link-clicks-detail';
import TopicLinkClicksUpdate from './topic-link-clicks-update';
import TopicLinkClicksDeleteDialog from './topic-link-clicks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicLinkClicksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicLinkClicksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicLinkClicksDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicLinkClicks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicLinkClicksDeleteDialog} />
  </>
);

export default Routes;
