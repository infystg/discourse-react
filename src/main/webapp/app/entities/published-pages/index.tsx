import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PublishedPages from './published-pages';
import PublishedPagesDetail from './published-pages-detail';
import PublishedPagesUpdate from './published-pages-update';
import PublishedPagesDeleteDialog from './published-pages-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PublishedPagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PublishedPagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PublishedPagesDetail} />
      <ErrorBoundaryRoute path={match.url} component={PublishedPages} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PublishedPagesDeleteDialog} />
  </>
);

export default Routes;
