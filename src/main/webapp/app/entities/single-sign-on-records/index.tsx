import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SingleSignOnRecords from './single-sign-on-records';
import SingleSignOnRecordsDetail from './single-sign-on-records-detail';
import SingleSignOnRecordsUpdate from './single-sign-on-records-update';
import SingleSignOnRecordsDeleteDialog from './single-sign-on-records-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SingleSignOnRecordsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SingleSignOnRecordsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SingleSignOnRecordsDetail} />
      <ErrorBoundaryRoute path={match.url} component={SingleSignOnRecords} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SingleSignOnRecordsDeleteDialog} />
  </>
);

export default Routes;
