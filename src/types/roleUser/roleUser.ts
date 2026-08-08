export const RoleUser = {
  ADOTANTE: 'adotante',
  DOADOR: 'doador',
  ADMIN: 'admin',
} as const;

export type RoleUser = (typeof RoleUser)[keyof typeof RoleUser];
