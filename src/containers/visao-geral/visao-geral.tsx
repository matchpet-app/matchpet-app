import { Box, Typography } from '@mui/material';
import { useVisaoGeral } from './useVisaoGeral';

const VisaoGeral = () => {
  const { user } = useVisaoGeral();

  if (!user) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 1,
      }}
    >
      <Typography variant="titleLG">Opa!</Typography>
    </Box>
  );
};

export default VisaoGeral;
