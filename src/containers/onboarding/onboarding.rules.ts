import { RoleUser } from '../../types/roleUser/roleUser';
import type { OnboardingStep } from './onboarding.types';

export function temPeloMenosUmRole(roles: RoleUser[]): boolean {
  return roles.length > 0;
}

export function getStepsPorRoles(_roles: RoleUser[]): OnboardingStep[] {
  return ['selecaoPerfil'];
}
