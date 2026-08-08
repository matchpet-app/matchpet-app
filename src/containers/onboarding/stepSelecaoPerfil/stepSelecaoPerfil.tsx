import { Box, Button, Typography } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';
import { CardComponent } from '../../../components/CardComponent';
import { colorPalette } from '../../../styles';
import type { RoleUser } from '../../../types/roleUser/roleUser';
import { useResponsivo } from '../../../utils/useResponsivo';
import { temPeloMenosUmRole } from '../onboarding.rules';
import type { OnboardingFormData } from '../onboarding.types';
import { assemblePerfilOpcoes } from './stepSelecaoPerfil.helpers';
import type { StepSelecaoPerfilProps } from './stepSelecaoPerfil.types';

const opcoesPerfil = assemblePerfilOpcoes();

const StepSelecaoPerfil = ({ onNext }: StepSelecaoPerfilProps) => {
  const { isMobile } = useResponsivo();
  const { control } = useFormContext<OnboardingFormData>();
  const { field } = useController({ control, name: 'roles' });

  const alternarRole = (role: RoleUser) => {
    const novosRoles = field.value.includes(role)
      ? field.value.filter((item) => item !== role)
      : [...field.value, role];
    field.onChange(novosRoles);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        px: 3,
        bgcolor: 'background.paper',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          width: '100%',
          maxWidth: 560,
          py: 6,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Typography variant="titleMD" sx={{ color: colorPalette.gray[900] }}>
            Olá! Seja bem-vindo(a)!
          </Typography>
          <Typography variant="bodySM" sx={{ color: colorPalette.gray[500] }}>
            O que você busca no Matchpet?
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 2,
            width: '100%',
          }}
        >
          {opcoesPerfil.map((opcao) => (
            <CardComponent
              key={opcao.role}
              selecionado={field.value.includes(opcao.role)}
              onSelect={() => alternarRole(opcao.role)}
              label={opcao.label}
              descricao={opcao.descricao}
              icone={opcao.icone}
              corFundoIcone={opcao.corFundoIcone}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ px: 5 }}
          onClick={onNext}
          disabled={!temPeloMenosUmRole(field.value)}
        >
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default StepSelecaoPerfil;
