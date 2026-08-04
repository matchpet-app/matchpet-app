import { http } from '../../lib/http';
import type { AccessTokenResponse, GoogleLoginPayload } from './auth.types';

const authApi = {
  async loginWithGoogle(
    payload: GoogleLoginPayload,
  ): Promise<AccessTokenResponse> {
    const { data } = await http.post<AccessTokenResponse>(
      '/v1/auth/google',
      payload,
    );
    return data;
  },

  async refreshSession(): Promise<AccessTokenResponse> {
    const { data } = await http.post<AccessTokenResponse>('/v1/auth/refresh');
    return data;
  },

  async logout(): Promise<void> {
    await http.post('/v1/auth/logout');
  },
};

export default authApi;
