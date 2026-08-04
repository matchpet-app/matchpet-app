import { authApi } from '../../api/auth';
import { http } from '../../lib/http';
import { useAuthStore } from '../../stores/auth/authStore';
import { decodeAccessToken } from '../../stores/auth/decodeAccessToken';

function applySession(accessToken: string): void {
  http.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  useAuthStore
    .getState()
    .setSession(accessToken, decodeAccessToken(accessToken));
}

function clearSession(): void {
  delete http.defaults.headers.common.Authorization;
  useAuthStore.getState().clearSession();
}

const authService = {
  async loginWithGoogle(idToken: string): Promise<void> {
    const { accessToken } = await authApi.loginWithGoogle({ idToken });
    applySession(accessToken);
  },

  async logout(): Promise<void> {
    await authApi.logout();
    clearSession();
  },

  async bootstrap(): Promise<void> {
    try {
      const { accessToken } = await authApi.refreshSession();
      applySession(accessToken);
    } catch {
      clearSession();
    } finally {
      useAuthStore.getState().setBootstrapping(false);
    }
  },
};

export default authService;
