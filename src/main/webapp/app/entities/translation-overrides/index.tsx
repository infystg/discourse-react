import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TranslationOverrides from './translation-overrides';
import TranslationOverridesDetail from './translation-overrides-detail';
import TranslationOverridesUpdate from './translation-overrides-update';
import TranslationOverridesDeleteDialog from './translation-overrides-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TranslationOverridesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TranslationOverridesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TranslationOverridesDetail} />
      <ErrorBoundaryRoute path={match.url} component={TranslationOverrides} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TranslationOverridesDeleteDialog} />
  </>
);

export default Routes;
