import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Themes from './themes';
import ThemesDetail from './themes-detail';
import ThemesUpdate from './themes-update';
import ThemesDeleteDialog from './themes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ThemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ThemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ThemesDetail} />
      <ErrorBoundaryRoute path={match.url} component={Themes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ThemesDeleteDialog} />
  </>
);

export default Routes;
