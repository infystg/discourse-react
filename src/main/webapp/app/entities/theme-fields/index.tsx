import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ThemeFields from './theme-fields';
import ThemeFieldsDetail from './theme-fields-detail';
import ThemeFieldsUpdate from './theme-fields-update';
import ThemeFieldsDeleteDialog from './theme-fields-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ThemeFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ThemeFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ThemeFieldsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ThemeFields} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ThemeFieldsDeleteDialog} />
  </>
);

export default Routes;
