import { RouteObject, useRoutes } from 'react-router';
import { lazy } from 'react';

import Home from '../pages/Home';
import MainLayout from '../components/Layout/MainLayout';

const Onboarding = lazy(() => import('../pages/Onboarding'));
const BookCourt = lazy(() => import('../pages/BookCourt'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'book-court', element: <BookCourt /> },
    ],
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
