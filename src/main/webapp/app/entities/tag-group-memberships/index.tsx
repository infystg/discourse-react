import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TagGroupMemberships from './tag-group-memberships';
import TagGroupMembershipsDetail from './tag-group-memberships-detail';
import TagGroupMembershipsUpdate from './tag-group-memberships-update';
import TagGroupMembershipsDeleteDialog from './tag-group-memberships-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TagGroupMembershipsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TagGroupMembershipsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TagGroupMembershipsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TagGroupMemberships} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TagGroupMembershipsDeleteDialog} />
  </>
);

export default Routes;
