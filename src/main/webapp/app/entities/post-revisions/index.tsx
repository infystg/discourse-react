import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostRevisions from './post-revisions';
import PostRevisionsDetail from './post-revisions-detail';
import PostRevisionsUpdate from './post-revisions-update';
import PostRevisionsDeleteDialog from './post-revisions-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostRevisionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostRevisionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostRevisionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostRevisions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostRevisionsDeleteDialog} />
  </>
);

export default Routes;
