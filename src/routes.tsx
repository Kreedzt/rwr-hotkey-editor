import { Navigate, RouteObject } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import HotkeyList from './pages/dashboard/HotkeyList';
import AddHotkey from './pages/dashboard/AddHotkey';
import EditHotkey from './pages/dashboard/EditHotKey';
import Welcome from './pages/welcome/Welcome';
import Settings from './pages/settings/Settings';

type IRouteDefine = RouteObject & {
  name: string;
  path: string;
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
        element: <AddHotkey />,
      },
      {
        name: '编辑热键集',
        hidden: true,
        path: 'edit/:id',
        element: <EditHotkey />,
      },
      {
        name: '热键集列表',
        hidden: true,
        path: '',
        element: <HotkeyList />
      }
    ],
  },
  {
    name: '设置',
    path: 'settings',
    element: <Settings />,
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
