import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Bookmarks from './bookmarks';
import BookmarksDetail from './bookmarks-detail';
import BookmarksUpdate from './bookmarks-update';
import BookmarksDeleteDialog from './bookmarks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BookmarksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BookmarksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BookmarksDetail} />
      <ErrorBoundaryRoute path={match.url} component={Bookmarks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={BookmarksDeleteDialog} />
  </>
);

export default Routes;
