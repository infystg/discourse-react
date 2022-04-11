import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategorySearchData from './category-search-data';
import CategorySearchDataDetail from './category-search-data-detail';
import CategorySearchDataUpdate from './category-search-data-update';
import CategorySearchDataDeleteDialog from './category-search-data-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategorySearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategorySearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategorySearchDataDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategorySearchData} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategorySearchDataDeleteDialog} />
  </>
);

export default Routes;
