import type { RoleUser } from '../../types/roleUser/roleUser';

export interface AuthUser {
  id: string;
  roles: RoleUser[];
}

function base64UrlDecode(value: string): string {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(
    base64.length + ((4 - (base64.length % 4)) % 4),
    '=',
  );
  return atob(padded);
}

export function decodeAccessToken(accessToken: string): AuthUser | null {
  try {
    const payload = accessToken.split('.')[1];
    const decoded = JSON.parse(base64UrlDecode(payload));
    if (typeof decoded.sub !== 'string' || !Array.isArray(decoded.roles)) {
      return null;
    }
    return { id: decoded.sub, roles: decoded.roles };
  } catch {
    return null;
  }
}
