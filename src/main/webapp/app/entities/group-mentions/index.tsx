import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupMentions from './group-mentions';
import GroupMentionsDetail from './group-mentions-detail';
import GroupMentionsUpdate from './group-mentions-update';
import GroupMentionsDeleteDialog from './group-mentions-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupMentionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupMentionsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupMentionsDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupMentions} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupMentionsDeleteDialog} />
  </>
);

export default Routes;
