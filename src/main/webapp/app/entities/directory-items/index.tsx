import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import DirectoryItems from './directory-items';
import DirectoryItemsDetail from './directory-items-detail';
import DirectoryItemsUpdate from './directory-items-update';
import DirectoryItemsDeleteDialog from './directory-items-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DirectoryItemsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DirectoryItemsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DirectoryItemsDetail} />
      <ErrorBoundaryRoute path={match.url} component={DirectoryItems} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DirectoryItemsDeleteDialog} />
  </>
);

export default Routes;
