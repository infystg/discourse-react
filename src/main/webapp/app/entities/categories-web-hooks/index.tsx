import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoriesWebHooks from './categories-web-hooks';
import CategoriesWebHooksDetail from './categories-web-hooks-detail';
import CategoriesWebHooksUpdate from './categories-web-hooks-update';
import CategoriesWebHooksDeleteDialog from './categories-web-hooks-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoriesWebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoriesWebHooksUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoriesWebHooksDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoriesWebHooks} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoriesWebHooksDeleteDialog} />
  </>
);

export default Routes;
