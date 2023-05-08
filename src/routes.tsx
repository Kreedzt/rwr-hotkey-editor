import { RouteObject } from 'react-router-dom';
import Dashboard from './pages/dashbord/Dashboard';
import Welcome from './pages/welcome/Welcome';

type IRouteDefine = RouteObject & {
  name: string;
  path: string;
};

export const routes: IRouteDefine[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    name: 'notFound',
    path: '*',
    element: <Welcome />,
  },
];
