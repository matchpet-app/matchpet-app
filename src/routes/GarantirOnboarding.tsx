import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuthStore } from '../stores/auth';

const GarantirOnboarding = () => {
  const usuario = useAuthStore((state) => state.user);
  const localizacao = useLocation();

  if (!usuario) {
    return <Outlet />;
  }

  const hasConcluidoOnboarding = usuario.roles.length > 0;
  const isRotaOnboarding = localizacao.pathname === '/onboarding';

  if (!hasConcluidoOnboarding && !isRotaOnboarding) {
    return <Navigate to="/onboarding" replace />;
  }

  if (hasConcluidoOnboarding && isRotaOnboarding) {
    return <Navigate to="/visao-geral" replace />;
  }

  return <Outlet />;
};

export default GarantirOnboarding;
