import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { type AuthUser, useAuthStore } from '../../stores/auth';

type UseVisaoGeralResult = { user: null } | { user: AuthUser };

export function useVisaoGeral(): UseVisaoGeralResult {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const isBootstrapping = useAuthStore((state) => state.isBootstrapping);

  useEffect(() => {
    if (!isBootstrapping && !user) {
      navigate('/', { replace: true });
    }
  }, [isBootstrapping, user, navigate]);

  return { user: isBootstrapping ? null : user };
}
