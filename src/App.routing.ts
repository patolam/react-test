import { lazy } from 'react';
import { RouteModel } from './shared/models/route.model';

const useAppRoutes = (): RouteModel[] => ([
  {
    name: 'Dashboard',
    config: {
      path: '/dashboard',
      exact: false,
      component: lazy(() => import('./modules/Dashboard/Dashboard.module')),
    },
  },
  {
    name: 'Other',
    config: {
      path: '/other',
      exact: false,
      component: lazy(() => import('./modules/Other/Other.module')),
    },
  },
]);

export default useAppRoutes;
