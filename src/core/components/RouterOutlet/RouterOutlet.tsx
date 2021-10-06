import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import React from 'react';
import { RouteModel } from '../../../shared/models/route.model';

const RouterOutlet: React.FC<{ routes: RouteModel[] }> = ({
  routes,
}) => {
  const match = useRouteMatch();

  return (
    <>
      <Route exact path={match.path}>
        <Redirect to={routes[0].config.path} />
      </Route>

      {routes.map(route => (
        <Route {...route.config} key={route.name} />
      ))}
    </>
  );
};

export default RouterOutlet;
