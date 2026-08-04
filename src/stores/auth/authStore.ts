import { create } from 'zustand';
import type { AuthUser } from './decodeAccessToken';

interface AuthState {
  accessToken: string | null;
  user: AuthUser | null;
  isBootstrapping: boolean;
  setSession: (accessToken: string, user: AuthUser | null) => void;
  clearSession: () => void;
  setBootstrapping: (isBootstrapping: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isBootstrapping: true,

  setSession: (accessToken, user) => set({ accessToken, user }),
  clearSession: () => set({ accessToken: null, user: null }),
  setBootstrapping: (isBootstrapping) => set({ isBootstrapping }),
}));
