import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Tags from './tags';
import TagsDetail from './tags-detail';
import TagsUpdate from './tags-update';
import TagsDeleteDialog from './tags-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TagsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TagsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TagsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Tags} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TagsDeleteDialog} />
  </>
);

export default Routes;
