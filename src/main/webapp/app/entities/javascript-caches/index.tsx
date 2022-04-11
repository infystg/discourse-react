import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import JavascriptCaches from './javascript-caches';
import JavascriptCachesDetail from './javascript-caches-detail';
import JavascriptCachesUpdate from './javascript-caches-update';
import JavascriptCachesDeleteDialog from './javascript-caches-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={JavascriptCachesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={JavascriptCachesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={JavascriptCachesDetail} />
      <ErrorBoundaryRoute path={match.url} component={JavascriptCaches} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={JavascriptCachesDeleteDialog} />
  </>
);

export default Routes;
