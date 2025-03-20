import { RouteObject, useRoutes } from 'react-router';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

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
