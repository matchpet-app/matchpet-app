import { createBrowserRouter } from 'react-router';
import Erro404 from '../containers/erro/erro404';
import Erro500 from '../containers/erro/erro500';
import Login from '../containers/login/login';
import VisaoGeral from '../containers/visao-geral/visao-geral';
import MainLayout from '../layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Erro500 />,
    children: [
      { index: true, element: <Login /> },
      { path: 'visao-geral', element: <VisaoGeral /> },
      { path: '*', element: <Erro404 /> },
    ],
  },
]);
