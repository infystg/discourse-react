import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ThemeTranslationOverrides from './theme-translation-overrides';
import ThemeTranslationOverridesDetail from './theme-translation-overrides-detail';
import ThemeTranslationOverridesUpdate from './theme-translation-overrides-update';
import ThemeTranslationOverridesDeleteDialog from './theme-translation-overrides-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ThemeTranslationOverridesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ThemeTranslationOverridesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ThemeTranslationOverridesDetail} />
      <ErrorBoundaryRoute path={match.url} component={ThemeTranslationOverrides} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ThemeTranslationOverridesDeleteDialog} />
  </>
);

export default Routes;
