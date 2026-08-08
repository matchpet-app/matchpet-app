export const TipoMoradia = {
  CASA: 'casa',
  APARTAMENTO: 'apartamento',
  OUTRO: 'outro',
} as const;

export type TipoMoradia = (typeof TipoMoradia)[keyof typeof TipoMoradia];

export const PosseMoradia = {
  PROPRIA: 'propria',
  ALUGADA: 'alugada',
  CEDIDA: 'cedida',
} as const;

export type PosseMoradia = (typeof PosseMoradia)[keyof typeof PosseMoradia];

export const StatusTelaProtecao = {
  SIM: 'sim',
  NAO: 'nao',
  PLANEJA_INSTALAR: 'planeja_instalar',
} as const;

export type StatusTelaProtecao =
  (typeof StatusTelaProtecao)[keyof typeof StatusTelaProtecao];
