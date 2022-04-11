import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EmbeddableHosts from './embeddable-hosts';
import EmbeddableHostsDetail from './embeddable-hosts-detail';
import EmbeddableHostsUpdate from './embeddable-hosts-update';
import EmbeddableHostsDeleteDialog from './embeddable-hosts-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EmbeddableHostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EmbeddableHostsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EmbeddableHostsDetail} />
      <ErrorBoundaryRoute path={match.url} component={EmbeddableHosts} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EmbeddableHostsDeleteDialog} />
  </>
);

export default Routes;
