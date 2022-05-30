import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoginRedirect from 'app/modules/login/login-redirect';
import Logout from 'app/modules/login/logout';
import Announcement from './modules/home/announcement';
import AllTopics from './modules/home/alltopics';

import Home from 'app/modules/home/home';
import EntitiesRoutes from 'app/entities/routes';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import Categories from './modules/home/catagories';
import Topic from './modules/home/Topic';

const loading = <div>loading ...</div>;

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});

const Routes = () => {
  return (
    <div className="view-routes">
      <Switch>
        <ErrorBoundaryRoute path="/logout" component={Logout} />
        <ErrorBoundaryRoute path="/" exact component={Home} />
        <ErrorBoundaryRoute exact path="/announcement" component={Announcement} />
        <ErrorBoundaryRoute exact path="/categories" component={Categories} />
        <ErrorBoundaryRoute path="/allTopics" component={AllTopics} />
        <ErrorBoundaryRoute exact path="/topic" component={Topic} />
        <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
        <ErrorBoundaryRoute path="/oauth2/authorization/oidc" component={LoginRedirect} />
        <PrivateRoute path="/" component={EntitiesRoutes} hasAnyAuthorities={[AUTHORITIES.USER]} />
        <ErrorBoundaryRoute component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
