import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicThumbnails from './topic-thumbnails';
import TopicThumbnailsDetail from './topic-thumbnails-detail';
import TopicThumbnailsUpdate from './topic-thumbnails-update';
import TopicThumbnailsDeleteDialog from './topic-thumbnails-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicThumbnailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicThumbnailsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicThumbnailsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicThumbnails} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicThumbnailsDeleteDialog} />
  </>
);

export default Routes;
