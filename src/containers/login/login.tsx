import { Box, Button, Link, Typography } from '@mui/material';
import { GoogleIcon, MatchPetIcon } from '../../components/icons';
import { colorPalette, fontFamily } from '../../styles';

const Login = () => {
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
          maxWidth: 468,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            alignSelf: 'flex-start',
          }}
        >
          <MatchPetIcon sx={{ fontSize: 32 }} />
          <Typography component="p" sx={{ fontFamily, fontSize: '1.875rem' }}>
            <Box
              component="span"
              sx={{ color: 'primary.main', fontWeight: 500 }}
            >
              Match
            </Box>
            <Box
              component="span"
              sx={{ color: colorPalette.secondary.dark, fontWeight: 600 }}
            >
              Pet
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            width: '100%',
          }}
        >
          <Typography variant="titleLG" sx={{ color: colorPalette.gray[700] }}>
            Seja bem vindo!
          </Typography>
          <Typography variant="bodyMD" color="text.secondary">
            Seu match está a sua espera
          </Typography>
        </Box>

        <Button
          fullWidth
          aria-label="Continuar com o Google"
          sx={{
            height: 54,
            borderRadius: '10px',
            bgcolor: 'common.white',
            boxShadow:
              '0px 0px 1.5px rgba(0,0,0,0.08), 0px 2px 1.5px rgba(0,0,0,0.17)',
            '&:hover': {
              bgcolor: colorPalette.gray[100],
              boxShadow:
                '0px 0px 1.5px rgba(0,0,0,0.08), 0px 2px 1.5px rgba(0,0,0,0.17)',
            },
          }}
        >
          <GoogleIcon sx={{ fontSize: 24 }} />
        </Button>

        <Typography
          variant="bodyXS"
          sx={{
            fontWeight: 600,
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          Ao logar, você concorda com os nossos{' '}
          <Link
            href="https://matchpet.com.br/termos-de-uso"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ color: colorPalette.secondary.dark }}
          >
            termos de uso
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
