import { useMediaQuery } from '@mui/material';

export const useResponsivo = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const is1024x768 =
    useMediaQuery('(max-width: 1024px) and (max-height: 768px)') && !isMobile;

  const is1366x768 =
    useMediaQuery('(max-width: 1366px) and (max-height: 768px)') && !is1024x768;

  const is1920x1080 =
    useMediaQuery('(max-width: 1920px) and (max-height: 1080px)') &&
    !is1366x768 &&
    !is1024x768;

  return { isMobile, is1366x768, is1024x768, is1920x1080 };
};
