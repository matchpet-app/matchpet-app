import { Box, Link, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { MatchPetIcon } from '../../components/icons';
import { colorPalette, fontFamily } from '../../styles';
import { useLogin } from './useLogin';

const Login = () => {
  const { error, handleSuccess, handleError } = useLogin();

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
            alignSelf: 'center',
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
            alignItems: 'center',
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

        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            shape="pill"
            text="continue_with"
          />
        </Box>

        {error && (
          <Typography
            variant="bodyXS"
            sx={{ color: colorPalette.feedback.error, textAlign: 'center' }}
          >
            {error}
          </Typography>
        )}

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
