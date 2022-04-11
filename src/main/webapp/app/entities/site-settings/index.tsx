import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SiteSettings from './site-settings';
import SiteSettingsDetail from './site-settings-detail';
import SiteSettingsUpdate from './site-settings-update';
import SiteSettingsDeleteDialog from './site-settings-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SiteSettingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SiteSettingsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SiteSettingsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SiteSettings} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SiteSettingsDeleteDialog} />
  </>
);

export default Routes;
