import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Categories from './categories';
import CategoriesDetail from './categories-detail';
import CategoriesUpdate from './categories-update';
import CategoriesDeleteDialog from './categories-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoriesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoriesDetail} />
      <ErrorBoundaryRoute path={match.url} component={Categories} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoriesDeleteDialog} />
  </>
);

export default Routes;
