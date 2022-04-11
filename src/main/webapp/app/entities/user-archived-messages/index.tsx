import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserArchivedMessages from './user-archived-messages';
import UserArchivedMessagesDetail from './user-archived-messages-detail';
import UserArchivedMessagesUpdate from './user-archived-messages-update';
import UserArchivedMessagesDeleteDialog from './user-archived-messages-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserArchivedMessagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserArchivedMessagesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserArchivedMessagesDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserArchivedMessages} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserArchivedMessagesDeleteDialog} />
  </>
);

export default Routes;
