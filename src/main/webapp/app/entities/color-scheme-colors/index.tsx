import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ColorSchemeColors from './color-scheme-colors';
import ColorSchemeColorsDetail from './color-scheme-colors-detail';
import ColorSchemeColorsUpdate from './color-scheme-colors-update';
import ColorSchemeColorsDeleteDialog from './color-scheme-colors-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ColorSchemeColorsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ColorSchemeColorsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ColorSchemeColorsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ColorSchemeColors} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ColorSchemeColorsDeleteDialog} />
  </>
);

export default Routes;
