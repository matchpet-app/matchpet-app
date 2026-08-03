import { createBrowserRouter } from 'react-router';
import Erro404 from '../containers/erro/erro404';
import Erro500 from '../containers/erro/erro500';
import Login from '../containers/login/login';
import MainLayout from '../layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Erro500 />,
    children: [
      { index: true, element: <Login /> },
      { path: '*', element: <Erro404 /> },
    ],
  },
]);
