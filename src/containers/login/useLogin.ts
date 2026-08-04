import type { CredentialResponse } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { authService } from '../../services/auth';
import { useAuthStore } from '../../stores/auth';

const GOOGLE_LOGIN_ERROR_MESSAGE =
  'Não foi possível continuar com o Google. Tente novamente.';

export function useLogin() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const isBootstrapping = useAuthStore((state) => state.isBootstrapping);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isBootstrapping && user) {
      navigate('/visao-geral', { replace: true });
    }
  }, [isBootstrapping, user, navigate]);

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      setError(GOOGLE_LOGIN_ERROR_MESSAGE);
      return;
    }

    try {
      setError(null);
      await authService.loginWithGoogle(credentialResponse.credential);
    } catch {
      setError(GOOGLE_LOGIN_ERROR_MESSAGE);
    }
  };

  const handleError = () => setError(GOOGLE_LOGIN_ERROR_MESSAGE);

  return { error, handleSuccess, handleError };
}
