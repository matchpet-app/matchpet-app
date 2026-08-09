import { cpf } from 'cpf-cnpj-validator';

function aplicarMascara(digitos: string): string {
  const parte1 = digitos.slice(0, 3);
  const parte2 = digitos.slice(3, 6);
  const parte3 = digitos.slice(6, 9);
  const parte4 = digitos.slice(9, 11);

  let resultado = parte1;
  if (digitos.length > 3) resultado += `.${parte2}`;
  if (digitos.length > 6) resultado += `.${parte3}`;
  if (digitos.length > 9) resultado += `-${parte4}`;

  return resultado;
}

export const cpfMask = {
  format: (value: string): string =>
    aplicarMascara(value.replace(/\D/g, '').slice(0, 11)),
  parse: (value: string): string => cpf.strip(value),
};

export function isCpfValido(value: string): boolean {
  return cpf.isValid(value);
}
