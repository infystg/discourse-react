import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WebHookEventTypesHooks from './web-hook-event-types-hooks';
import WebHookEventTypesHooksDetail from './web-hook-event-types-hooks-detail';
import WebHookEventTypesHooksUpdate from './web-hook-event-types-hooks-update';
import WebHookEventTypesHooksDeleteDialog from './web-hook-event-types-hooks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WebHookEventTypesHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WebHookEventTypesHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WebHookEventTypesHooksDetail} />
      <ErrorBoundaryRoute path={match.url} component={WebHookEventTypesHooks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WebHookEventTypesHooksDeleteDialog} />
  </>
);

export default Routes;
