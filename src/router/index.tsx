import { RouteObject, useRoutes } from 'react-router';
import { lazy } from 'react';

import Home from '../pages/Home';

const Onboarding = lazy(() => import('../pages/Onboarding'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
  },
  { path: '*', element: <NotFound /> },
];

export default function Router() {
  return useRoutes(routes);
}
