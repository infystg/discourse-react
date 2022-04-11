import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import PostSearchData from './post-search-data';
import PostSearchDataDetail from './post-search-data-detail';
import PostSearchDataUpdate from './post-search-data-update';
import PostSearchDataDeleteDialog from './post-search-data-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PostSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PostSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PostSearchDataDetail} />
      <ErrorBoundaryRoute path={match.url} component={PostSearchData} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PostSearchDataDeleteDialog} />
  </>
);

export default Routes;
