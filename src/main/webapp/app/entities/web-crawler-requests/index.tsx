import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WebCrawlerRequests from './web-crawler-requests';
import WebCrawlerRequestsDetail from './web-crawler-requests-detail';
import WebCrawlerRequestsUpdate from './web-crawler-requests-update';
import WebCrawlerRequestsDeleteDialog from './web-crawler-requests-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WebCrawlerRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WebCrawlerRequestsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WebCrawlerRequestsDetail} />
      <ErrorBoundaryRoute path={match.url} component={WebCrawlerRequests} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WebCrawlerRequestsDeleteDialog} />
  </>
);

export default Routes;
