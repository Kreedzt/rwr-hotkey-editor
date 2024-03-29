import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import RouteSuspense from './components/loading/RouteSuspense';
import Dashboard from './pages/dashboard/Dashboard';
/* import HotkeyList from './pages/dashboard/HotkeyList'; */
/* import AddHotkey from './pages/dashboard/AddHotkey'; */
/* import EditHotkey from './pages/dashboard/EditHotKey'; */
/* import Welcome from './pages/welcome/Welcome'; */
/* import About from './pages/about/About'; */
/* import Settings from './pages/settings/Settings'; */

type IRouteDefine = Omit<RouteObject, 'name' | 'children' | 'path'> & {
  path: string;
  name: string;
  hidden?: boolean;
  children?: IRouteDefine[];
};

export const routes: IRouteDefine[] = [
  {
    name: '主页',
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        name: '添加热键集',
        hidden: true,
        path: 'add',
        element: <RouteSuspense Comp={React.lazy(() => import('./pages/dashboard/AddHotkey'))} />
      },
      {
        name: '编辑热键集',
        hidden: true,
        path: 'edit/:id',
        element: <RouteSuspense Comp={React.lazy(() => import('./pages/dashboard/EditHotKey'))} />
      },
      {
        name: '热键集列表',
        hidden: true,
        path: '',
        element: <RouteSuspense Comp={React.lazy(() => import('./pages/dashboard/HotkeyList'))} />
      },
    ],
  },
  {
    name: '设置',
    path: 'settings',
    element: <RouteSuspense Comp={React.lazy(() => import('./pages/settings/Settings'))} />
  },
  {
    name: '关于',
    path: 'about',
    element: <RouteSuspense Comp={React.lazy(() => import('./pages/about/About'))} />
  },
  {
    name: 'notFound',
    index: true,
    path: '',
    element: <Navigate to="/dashboard" replace />,
    hidden: true,
  },
  /* {
   *   name: 'notFound',
   *   path: '*',
   *   element: <Welcome />,
   *   hidden: true,
   * }, */
];
