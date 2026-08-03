import { Box, Typography } from '@mui/material';

const Erro500 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <Typography variant="titleXXL">500</Typography>
      <Typography variant="bodyMD" color="text.secondary">
        Ocorreu um erro inesperado.
      </Typography>
    </Box>
  );
};

export default Erro500;
