import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TagsWebHooks from './tags-web-hooks';
import TagsWebHooksDetail from './tags-web-hooks-detail';
import TagsWebHooksUpdate from './tags-web-hooks-update';
import TagsWebHooksDeleteDialog from './tags-web-hooks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TagsWebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TagsWebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TagsWebHooksDetail} />
      <ErrorBoundaryRoute path={match.url} component={TagsWebHooks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TagsWebHooksDeleteDialog} />
  </>
);

export default Routes;
