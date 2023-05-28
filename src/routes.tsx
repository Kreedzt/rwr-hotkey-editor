import { RouteObject } from 'react-router-dom';
import Dashboard from './pages/dashbord/Dashboard';
import Welcome from './pages/welcome/Welcome';
import Settings from './pages/settings/Settings';

type IRouteDefine = RouteObject & {
  name: string;
  path: string;
  hidden?: boolean;
};

export const routes: IRouteDefine[] = [
  {
    name: '主页',
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    name: '设置',
    path: '/settings',
    element: <Settings />,
  },
  {
    name: 'notFound',
    path: '*',
    element: <Welcome />,
    hidden: true,
  },
];
