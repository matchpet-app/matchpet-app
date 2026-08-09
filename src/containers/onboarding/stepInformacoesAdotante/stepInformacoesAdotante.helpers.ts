import type { OnboardingFormData } from '../onboarding.types';

export const camposStepInformacoesAdotante = [
  'nomeCompleto',
  'dataNascimento',
  'cpf',
  'telefone',
] as const satisfies readonly (keyof OnboardingFormData)[];
