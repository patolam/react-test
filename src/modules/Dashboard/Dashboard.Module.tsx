import React from 'react';
import useDashboardRoutes from './Dashboard.Routing';
import RouterOutlet from '../../core/components/RouterOutlet/RouterOutlet';
import { useRouteMatch } from 'react-router-dom';

const Dashboard = () => {
  const match = useRouteMatch();
  const routes = useDashboardRoutes(match);

  return (
    <RouterOutlet routes={routes} />
  );
};

export default Dashboard;
