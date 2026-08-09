function aplicarMascara(digitos: string): string {
  const ehCelular = digitos.length > 10;
  const tamanhoPrefixo = ehCelular ? 5 : 4;

  const ddd = digitos.slice(0, 2);
  const prefixo = digitos.slice(2, 2 + tamanhoPrefixo);
  const sufixo = digitos.slice(2 + tamanhoPrefixo);

  let resultado = '';
  if (ddd) resultado += `(${ddd}`;
  if (digitos.length > 2) resultado += ') ';
  resultado += prefixo;
  if (sufixo) resultado += `-${sufixo}`;

  return resultado;
}

export const telefoneMask = {
  format: (value: string): string =>
    aplicarMascara(value.replace(/\D/g, '').slice(0, 11)),
  parse: (value: string): string => value.replace(/\D/g, '').slice(0, 11),
};
