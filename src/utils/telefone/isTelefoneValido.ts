export function isTelefoneValido(value: string): boolean {
  const digitos = value.replace(/\D/g, '');
  return digitos.length === 10 || digitos.length === 11;
}
