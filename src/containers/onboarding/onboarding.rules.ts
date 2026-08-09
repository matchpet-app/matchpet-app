import { RoleUser } from '../../types/roleUser/roleUser';
import type { OnboardingStep } from './onboarding.types';

export function temPeloMenosUmRole(roles: RoleUser[]): boolean {
  return roles.length > 0;
}

export function getStepsPorRoles(roles: RoleUser[]): OnboardingStep[] {
  const steps: OnboardingStep[] = ['selecaoPerfil'];

  if (roles.includes(RoleUser.ADOTANTE)) {
    steps.push('informacoesAdotante');
  } else if (roles.includes(RoleUser.DOADOR)) {
    steps.push('informacoesDoador');
  }

  return steps;
}
