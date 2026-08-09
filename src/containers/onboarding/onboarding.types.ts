import type { OnboardingSchemaData } from './onboarding.schemas';

export type OnboardingFormData = OnboardingSchemaData;

export type OnboardingStep =
  | 'selecaoPerfil'
  | 'informacoesAdotante'
  | 'informacoesDoador';
