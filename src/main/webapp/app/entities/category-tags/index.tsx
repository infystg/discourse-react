import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoryTags from './category-tags';
import CategoryTagsDetail from './category-tags-detail';
import CategoryTagsUpdate from './category-tags-update';
import CategoryTagsDeleteDialog from './category-tags-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoryTagsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoryTagsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryTagsDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoryTags} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryTagsDeleteDialog} />
  </>
);

export default Routes;
