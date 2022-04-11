import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TopicCustomFields from './topic-custom-fields';
import TopicCustomFieldsDetail from './topic-custom-fields-detail';
import TopicCustomFieldsUpdate from './topic-custom-fields-update';
import TopicCustomFieldsDeleteDialog from './topic-custom-fields-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TopicCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TopicCustomFieldsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TopicCustomFieldsDetail} />
      <ErrorBoundaryRoute path={match.url} component={TopicCustomFields} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TopicCustomFieldsDeleteDialog} />
  </>
);

export default Routes;
