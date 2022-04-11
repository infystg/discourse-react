import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CustomEmojis from './custom-emojis';
import CustomEmojisDetail from './custom-emojis-detail';
import CustomEmojisUpdate from './custom-emojis-update';
import CustomEmojisDeleteDialog from './custom-emojis-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CustomEmojisUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CustomEmojisUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CustomEmojisDetail} />
      <ErrorBoundaryRoute path={match.url} component={CustomEmojis} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CustomEmojisDeleteDialog} />
  </>
);

export default Routes;
