import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { runApp } from './startup';
import './index.css';
import Root from './pages/root/Root';
import { routes } from './routes';

runApp();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routes as RouteObject[],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
