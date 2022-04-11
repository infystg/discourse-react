import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WebHooks from './web-hooks';
import WebHooksDetail from './web-hooks-detail';
import WebHooksUpdate from './web-hooks-update';
import WebHooksDeleteDialog from './web-hooks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WebHooksDetail} />
      <ErrorBoundaryRoute path={match.url} component={WebHooks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WebHooksDeleteDialog} />
  </>
);

export default Routes;
