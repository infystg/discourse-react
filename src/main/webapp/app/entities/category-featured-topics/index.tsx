import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CategoryFeaturedTopics from './category-featured-topics';
import CategoryFeaturedTopicsDetail from './category-featured-topics-detail';
import CategoryFeaturedTopicsUpdate from './category-featured-topics-update';
import CategoryFeaturedTopicsDeleteDialog from './category-featured-topics-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CategoryFeaturedTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CategoryFeaturedTopicsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CategoryFeaturedTopicsDetail} />
      <ErrorBoundaryRoute path={match.url} component={CategoryFeaturedTopics} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CategoryFeaturedTopicsDeleteDialog} />
  </>
);

export default Routes;
