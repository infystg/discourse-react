import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ColorSchemes from './color-schemes';
import ColorSchemesDetail from './color-schemes-detail';
import ColorSchemesUpdate from './color-schemes-update';
import ColorSchemesDeleteDialog from './color-schemes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ColorSchemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ColorSchemesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ColorSchemesDetail} />
      <ErrorBoundaryRoute path={match.url} component={ColorSchemes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ColorSchemesDeleteDialog} />
  </>
);

export default Routes;
