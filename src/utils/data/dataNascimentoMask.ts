import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const FORMATO_EXIBICAO = 'DD/MM/YYYY';
const FORMATO_ARMAZENADO = 'YYYY-MM-DD';

function aplicarMascara(digitos: string): string {
  const dia = digitos.slice(0, 2);
  const mes = digitos.slice(2, 4);
  const ano = digitos.slice(4, 8);

  let resultado = dia;
  if (digitos.length > 2) resultado += `/${mes}`;
  if (digitos.length > 4) resultado += `/${ano}`;

  return resultado;
}

export const dataNascimentoMask = {
  format: (value: string): string => {
    if (!value) return '';

    const dataArmazenada = dayjs(value, FORMATO_ARMAZENADO, true);
    if (dataArmazenada.isValid())
      return dataArmazenada.format(FORMATO_EXIBICAO);

    return aplicarMascara(value.replace(/\D/g, '').slice(0, 8));
  },
  parse: (value: string): string => {
    const digitos = value.replace(/\D/g, '').slice(0, 8);
    if (digitos.length < 8) return aplicarMascara(digitos);

    const dataDigitada = dayjs(aplicarMascara(digitos), FORMATO_EXIBICAO, true);
    return dataDigitada.isValid()
      ? dataDigitada.format(FORMATO_ARMAZENADO)
      : aplicarMascara(digitos);
  },
};
