import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import UserSecondFactors from './user-second-factors';
import UserSecondFactorsDetail from './user-second-factors-detail';
import UserSecondFactorsUpdate from './user-second-factors-update';
import UserSecondFactorsDeleteDialog from './user-second-factors-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UserSecondFactorsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UserSecondFactorsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UserSecondFactorsDetail} />
      <ErrorBoundaryRoute path={match.url} component={UserSecondFactors} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UserSecondFactorsDeleteDialog} />
  </>
);

export default Routes;
