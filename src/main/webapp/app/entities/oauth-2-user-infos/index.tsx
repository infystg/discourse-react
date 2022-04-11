import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Oauth2UserInfos from './oauth-2-user-infos';
import Oauth2UserInfosDetail from './oauth-2-user-infos-detail';
import Oauth2UserInfosUpdate from './oauth-2-user-infos-update';
import Oauth2UserInfosDeleteDialog from './oauth-2-user-infos-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={Oauth2UserInfosUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={Oauth2UserInfosUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={Oauth2UserInfosDetail} />
      <ErrorBoundaryRoute path={match.url} component={Oauth2UserInfos} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={Oauth2UserInfosDeleteDialog} />
  </>
);

export default Routes;
