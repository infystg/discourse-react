import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicViews from './topic-views';
import TopicViewsDetail from './topic-views-detail';
import TopicViewsUpdate from './topic-views-update';
import TopicViewsDeleteDialog from './topic-views-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicViewsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicViewsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicViewsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicViews} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicViewsDeleteDialog} />
  </>
);

export default Routes;
