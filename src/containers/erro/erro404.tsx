import { Box, Typography } from '@mui/material';

const Erro404 = () => {
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
      <Typography variant="titleXXL">404</Typography>
      <Typography variant="bodyMD" color="text.secondary">
        Página não encontrada.
      </Typography>
    </Box>
  );
};

export default Erro404;
