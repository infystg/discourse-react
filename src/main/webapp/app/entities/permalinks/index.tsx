import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Permalinks from './permalinks';
import PermalinksDetail from './permalinks-detail';
import PermalinksUpdate from './permalinks-update';
import PermalinksDeleteDialog from './permalinks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PermalinksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PermalinksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PermalinksDetail} />
      <ErrorBoundaryRoute path={match.url} component={Permalinks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PermalinksDeleteDialog} />
  </>
);

export default Routes;
