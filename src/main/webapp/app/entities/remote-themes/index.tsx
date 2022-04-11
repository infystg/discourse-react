import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import RemoteThemes from './remote-themes';
import RemoteThemesDetail from './remote-themes-detail';
import RemoteThemesUpdate from './remote-themes-update';
import RemoteThemesDeleteDialog from './remote-themes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={RemoteThemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={RemoteThemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={RemoteThemesDetail} />
      <ErrorBoundaryRoute path={match.url} component={RemoteThemes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={RemoteThemesDeleteDialog} />
  </>
);

export default Routes;
