import type { ReactNode } from 'react';
import type { RoleUser } from '../../../types/roleUser/roleUser';

export interface OpcaoPerfil {
  role: RoleUser;
  label: string;
  descricao: string;
  icone: ReactNode;
  corFundoIcone: string;
}

export interface StepSelecaoPerfilProps {
  onNext: () => void;
  onBack: () => void;
}
