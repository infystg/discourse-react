import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserSearchData from './user-search-data';
import UserSearchDataDetail from './user-search-data-detail';
import UserSearchDataUpdate from './user-search-data-update';
import UserSearchDataDeleteDialog from './user-search-data-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserSearchDataDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserSearchData} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserSearchDataDeleteDialog} />
  </>
);

export default Routes;
