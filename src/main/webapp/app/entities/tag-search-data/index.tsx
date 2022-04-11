import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TagSearchData from './tag-search-data';
import TagSearchDataDetail from './tag-search-data-detail';
import TagSearchDataUpdate from './tag-search-data-update';
import TagSearchDataDeleteDialog from './tag-search-data-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TagSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TagSearchDataUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TagSearchDataDetail} />
      <ErrorBoundaryRoute path={match.url} component={TagSearchData} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TagSearchDataDeleteDialog} />
  </>
);

export default Routes;
