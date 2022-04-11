import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BackupDraftPosts from './backup-draft-posts';
import BackupDraftPostsDetail from './backup-draft-posts-detail';
import BackupDraftPostsUpdate from './backup-draft-posts-update';
import BackupDraftPostsDeleteDialog from './backup-draft-posts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BackupDraftPostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BackupDraftPostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BackupDraftPostsDetail} />
      <ErrorBoundaryRoute path={match.url} component={BackupDraftPosts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BackupDraftPostsDeleteDialog} />
  </>
);

export default Routes;
