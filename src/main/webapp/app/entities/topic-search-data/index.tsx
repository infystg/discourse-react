import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicSearchData from './topic-search-data';
import TopicSearchDataDetail from './topic-search-data-detail';
import TopicSearchDataUpdate from './topic-search-data-update';
import TopicSearchDataDeleteDialog from './topic-search-data-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicSearchDataDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicSearchData} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicSearchDataDeleteDialog} />
  </>
);

export default Routes;
