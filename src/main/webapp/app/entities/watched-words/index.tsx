import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WatchedWords from './watched-words';
import WatchedWordsDetail from './watched-words-detail';
import WatchedWordsUpdate from './watched-words-update';
import WatchedWordsDeleteDialog from './watched-words-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WatchedWordsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WatchedWordsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WatchedWordsDetail} />
      <ErrorBoundaryRoute path={match.url} component={WatchedWords} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WatchedWordsDeleteDialog} />
  </>
);

export default Routes;
