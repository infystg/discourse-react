import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import DraftSequences from './draft-sequences';
import DraftSequencesDetail from './draft-sequences-detail';
import DraftSequencesUpdate from './draft-sequences-update';
import DraftSequencesDeleteDialog from './draft-sequences-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DraftSequencesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DraftSequencesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DraftSequencesDetail} />
      <ErrorBoundaryRoute path={match.url} component={DraftSequences} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DraftSequencesDeleteDialog} />
  </>
);

export default Routes;
