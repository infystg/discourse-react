import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicLinks from './topic-links';
import TopicLinksDetail from './topic-links-detail';
import TopicLinksUpdate from './topic-links-update';
import TopicLinksDeleteDialog from './topic-links-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicLinksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicLinksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicLinksDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicLinks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicLinksDeleteDialog} />
  </>
);

export default Routes;
