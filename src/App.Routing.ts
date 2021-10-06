import { lazy } from 'react';
import { RouteModel } from './shared/models/Route.Model';

const useAppRoutes = (): RouteModel[] => ([
  {
    name: 'Dashboard',
    config: {
      path: '/dashboard',
      exact: false,
      component: lazy(() => import('./modules/Dashboard/Dashboard.Module')),
    },
  },
  {
    name: 'Other',
    config: {
      path: '/other',
      exact: false,
      component: lazy(() => import('./modules/Other/Other.Module')),
    },
  },
]);

export default useAppRoutes;
