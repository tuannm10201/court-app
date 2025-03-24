import { RouteObject, useRoutes } from 'react-router';
import { lazy } from 'react';

import Home from '../pages/Home';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  { path: '*', element: <NotFound /> },
];

export default function Router() {
  return useRoutes(routes);
}
