import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ChildThemes from './child-themes';
import ChildThemesDetail from './child-themes-detail';
import ChildThemesUpdate from './child-themes-update';
import ChildThemesDeleteDialog from './child-themes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ChildThemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ChildThemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ChildThemesDetail} />
      <ErrorBoundaryRoute path={match.url} component={ChildThemes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ChildThemesDeleteDialog} />
  </>
);

export default Routes;
