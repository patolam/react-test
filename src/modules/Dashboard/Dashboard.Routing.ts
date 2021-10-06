import { RouteModel } from '../../shared/models/Route.Model';
import DashboardDetailsOne from './pages/DashboardDetailsOne/DashboardDetailsOne';
import DashboardDetailsTwo from './pages/DashboardDetailsTwo/DashboardDetailsTwo';

const useDashboardRoutes = (match: any): RouteModel[] => ([
  {
    name: 'DashboardDetailsOne',
    config: {
      path: `${match.path}/details-one`,
      exact: true,
      component: DashboardDetailsOne,
    },
  },
  {
    name: 'DashboardDetailsTwo',
    config: {
      path: `${match.path}/details-two`,
      exact: true,
      component: DashboardDetailsTwo,
    },
  },
]);

export default useDashboardRoutes;
