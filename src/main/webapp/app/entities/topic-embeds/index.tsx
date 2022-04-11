import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicEmbeds from './topic-embeds';
import TopicEmbedsDetail from './topic-embeds-detail';
import TopicEmbedsUpdate from './topic-embeds-update';
import TopicEmbedsDeleteDialog from './topic-embeds-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicEmbedsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicEmbedsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicEmbedsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicEmbeds} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicEmbedsDeleteDialog} />
  </>
);

export default Routes;
