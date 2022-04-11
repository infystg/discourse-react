import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import GroupArchivedMessages from './group-archived-messages';
import GroupArchivedMessagesDetail from './group-archived-messages-detail';
import GroupArchivedMessagesUpdate from './group-archived-messages-update';
import GroupArchivedMessagesDeleteDialog from './group-archived-messages-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={GroupArchivedMessagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={GroupArchivedMessagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={GroupArchivedMessagesDetail} />
      <ErrorBoundaryRoute path={match.url} component={GroupArchivedMessages} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={GroupArchivedMessagesDeleteDialog} />
  </>
);

export default Routes;
