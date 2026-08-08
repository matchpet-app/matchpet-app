import { createBrowserRouter } from 'react-router';
import Erro404 from '../containers/erro/erro404';
import Erro500 from '../containers/erro/erro500';
import Login from '../containers/login/login';
import Onboarding from '../containers/onboarding/onboarding';
import VisaoGeral from '../containers/visao-geral/visao-geral';
import MainLayout from '../layouts/MainLayout';
import GarantirOnboarding from './GarantirOnboarding';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Erro500 />,
    children: [
      { index: true, element: <Login /> },
      {
        element: <GarantirOnboarding />,
        children: [
          { path: 'visao-geral', element: <VisaoGeral /> },
          { path: 'onboarding', element: <Onboarding /> },
        ],
      },
      { path: '*', element: <Erro404 /> },
    ],
  },
]);
