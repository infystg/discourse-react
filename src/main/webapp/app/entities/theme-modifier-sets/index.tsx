import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ThemeModifierSets from './theme-modifier-sets';
import ThemeModifierSetsDetail from './theme-modifier-sets-detail';
import ThemeModifierSetsUpdate from './theme-modifier-sets-update';
import ThemeModifierSetsDeleteDialog from './theme-modifier-sets-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ThemeModifierSetsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ThemeModifierSetsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ThemeModifierSetsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ThemeModifierSets} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ThemeModifierSetsDeleteDialog} />
  </>
);

export default Routes;
