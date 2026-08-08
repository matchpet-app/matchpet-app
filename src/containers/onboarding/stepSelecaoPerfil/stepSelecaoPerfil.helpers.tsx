import { HeartIcon, MatchPetIcon } from '../../../components/icons';
import { colorPalette } from '../../../styles';
import { RoleUser } from '../../../types/roleUser/roleUser';
import type { OpcaoPerfil } from './stepSelecaoPerfil.types';

export function assemblePerfilOpcoes(): OpcaoPerfil[] {
  return [
    {
      role: RoleUser.ADOTANTE,
      label: 'Adotar',
      descricao: 'Encontre um novo amigo para chamar de seu',
      icone: <MatchPetIcon size={28} />,
      corFundoIcone: colorPalette.primary.light,
    },
    {
      role: RoleUser.DOADOR,
      label: 'Doar',
      descricao: 'Ajude quem ainda espera por um lar',
      icone: (
        <HeartIcon size={28} sx={{ color: colorPalette.secondary.medium }} />
      ),
      corFundoIcone: colorPalette.secondary.light,
    },
  ];
}
