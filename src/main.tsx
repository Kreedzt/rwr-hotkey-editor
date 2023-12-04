import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initConfig } from './store/config';
import './index.css';
import Root from './pages/root/Root';
import { routes } from './routes';

// 初始化配置
initConfig();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
