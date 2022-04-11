import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicTags from './topic-tags';
import TopicTagsDetail from './topic-tags-detail';
import TopicTagsUpdate from './topic-tags-update';
import TopicTagsDeleteDialog from './topic-tags-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicTagsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicTagsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicTagsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicTags} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicTagsDeleteDialog} />
  </>
);

export default Routes;
