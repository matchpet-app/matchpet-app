import { Box, Button, Typography } from '@mui/material';
import { colorPalette } from '../../../styles';
import type { StepInformacoesDoadorProps } from './stepInformacoesDoador.types';

const StepInformacoesDoador = ({
  onNext,
  onBack,
}: StepInformacoesDoadorProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        px: 3,
        gap: 3,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="titleMD" sx={{ color: colorPalette.gray[900] }}>
        Informações do doador
      </Typography>
      <Typography variant="bodySM" sx={{ color: colorPalette.gray[500] }}>
        Em construção — os campos deste step ainda serão adicionados.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
        <Button variant="contained" onClick={onNext}>
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default StepInformacoesDoador;
