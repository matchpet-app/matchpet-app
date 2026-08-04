import { CssBaseline, ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { authService } from './services/auth';
import { theme } from './styles';

function App() {
  useEffect(() => {
    authService.bootstrap();
  }, []);

  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      locale="pt-BR"
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
