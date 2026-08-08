import { Box, Card, CardActionArea, Typography } from '@mui/material';
import { colorPalette } from '../../styles';
import type { CardComponentProps } from './CardComponent.types';

export const CardComponent = ({
  selecionado,
  onSelect,
  label,
  descricao,
  icone,
  corFundoIcone,
}: CardComponentProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        flex: 1,
        borderRadius: 3,
        borderColor: selecionado
          ? colorPalette.primary.brand
          : colorPalette.gray[100],
        borderWidth: 1,
      }}
    >
      <CardActionArea
        onClick={onSelect}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1.5,
          px: 3,
          py: 4,
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: corFundoIcone,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icone}
        </Box>
        <Typography variant="titleSM" sx={{ color: colorPalette.gray[900] }}>
          {label}
        </Typography>
        <Typography
          variant="bodyXS"
          sx={{ color: colorPalette.gray[500], textAlign: 'center' }}
        >
          {descricao}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
