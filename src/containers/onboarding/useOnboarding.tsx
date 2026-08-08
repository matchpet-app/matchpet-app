import { useState } from 'react';
import type { RoleUser } from '../../types/roleUser/roleUser';
import { getStepsPorRoles } from './onboarding.rules';
import type { OnboardingStep } from './onboarding.types';

export function useOnboarding(roles: RoleUser[]) {
  const [indiceStep, setIndiceStep] = useState(0);
  const steps: OnboardingStep[] = getStepsPorRoles(roles);
  const stepAtual = steps[indiceStep];

  const avancarStep = () => {
    setIndiceStep((atual) => Math.min(atual + 1, steps.length - 1));
  };

  const voltarStep = () => {
    setIndiceStep((atual) => Math.max(atual - 1, 0));
  };

  return { steps, stepAtual, avancarStep, voltarStep };
}
