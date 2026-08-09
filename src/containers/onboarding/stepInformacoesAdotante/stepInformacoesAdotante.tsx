import { Box, Button, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { TextFieldComponent } from '../../../components/TextFieldComponent';
import { colorPalette } from '../../../styles';
import { cpfMask } from '../../../utils/cpf';
import { dataNascimentoMask } from '../../../utils/data';
import { telefoneMask } from '../../../utils/telefone';
import { useResponsivo } from '../../../utils/useResponsivo';
import type { OnboardingFormData } from '../onboarding.types';
import { camposStepInformacoesAdotante } from './stepInformacoesAdotante.helpers';
import type { StepInformacoesAdotanteProps } from './stepInformacoesAdotante.types';

const StepInformacoesAdotante = ({
  onNext,
  onBack,
}: StepInformacoesAdotanteProps) => {
  const { isMobile } = useResponsivo();
  const { control, trigger } = useFormContext<OnboardingFormData>();

  const avancar = async () => {
    const valido = await trigger(camposStepInformacoesAdotante);
    if (valido) onNext();
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
        py: 6,
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 760 }}>
        <Typography
          variant="titleMD"
          sx={{ color: colorPalette.gray[900], mb: 4 }}
        >
          Informações do adotante
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 3,
          }}
        >
          <TextFieldComponent
            control={control}
            name="nomeCompleto"
            label="Nome completo"
            placeholder="Digite aqui seu nome completo"
          />
          <TextFieldComponent
            control={control}
            name="cpf"
            label="CPF"
            placeholder="XXX.XXX.XXX-XX"
            format={cpfMask.format}
            parse={cpfMask.parse}
            slotProps={{ htmlInput: { maxLength: 14 } }}
          />
          <TextFieldComponent
            control={control}
            name="dataNascimento"
            label="Data de nascimento"
            placeholder="DD/MM/AAAA"
            format={dataNascimentoMask.format}
            parse={dataNascimentoMask.parse}
            slotProps={{ htmlInput: { maxLength: 10 } }}
          />
          <TextFieldComponent
            control={control}
            name="telefone"
            label="Telefone de contato"
            placeholder="(XX) XXXXX-XXXX"
            format={telefoneMask.format}
            parse={telefoneMask.parse}
            slotProps={{ htmlInput: { maxLength: 15 } }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
          <Button variant="outlined" onClick={onBack}>
            Voltar
          </Button>
          <Button variant="contained" onClick={avancar}>
            Continuar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StepInformacoesAdotante;
