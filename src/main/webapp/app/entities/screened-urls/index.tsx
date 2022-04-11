import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ScreenedUrls from './screened-urls';
import ScreenedUrlsDetail from './screened-urls-detail';
import ScreenedUrlsUpdate from './screened-urls-update';
import ScreenedUrlsDeleteDialog from './screened-urls-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ScreenedUrlsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ScreenedUrlsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ScreenedUrlsDetail} />
      <ErrorBoundaryRoute path={match.url} component={ScreenedUrls} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ScreenedUrlsDeleteDialog} />
  </>
);

export default Routes;
