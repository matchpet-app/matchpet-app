import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { onboardingSchema } from './onboarding.schemas';
import type { OnboardingFormData } from './onboarding.types';
import StepSelecaoPerfil from './stepSelecaoPerfil/stepSelecaoPerfil';
import { useOnboarding } from './useOnboarding';

const Onboarding = () => {
  const formulario = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: { roles: [] },
  });

  const roles = useWatch({ control: formulario.control, name: 'roles' });
  const { stepAtual, avancarStep, voltarStep } = useOnboarding(roles);

  return (
    <FormProvider {...formulario}>
      {stepAtual === 'selecaoPerfil' && (
        <StepSelecaoPerfil onNext={avancarStep} onBack={voltarStep} />
      )}
    </FormProvider>
  );
};

export default Onboarding;
