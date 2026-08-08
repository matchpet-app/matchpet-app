import type { ReactNode } from 'react';

export interface CardComponentProps {
  selecionado: boolean;
  onSelect: () => void;
  label: string;
  descricao: string;
  icone: ReactNode;
  corFundoIcone: string;
}
