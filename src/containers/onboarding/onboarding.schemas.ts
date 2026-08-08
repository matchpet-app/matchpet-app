import { z } from 'zod';
import { RoleUser } from '../../types/roleUser/roleUser';

export const onboardingSchema = z.object({
  roles: z.array(z.enum(RoleUser)),
});

export type OnboardingSchemaData = z.infer<typeof onboardingSchema>;
