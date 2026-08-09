import { z } from 'zod';
import { RoleUser } from '../../types/roleUser/roleUser';
import { isCpfValido } from '../../utils/cpf';
import { isDataNascimentoValida } from '../../utils/data';
import { isTelefoneValido } from '../../utils/telefone';

export const onboardingSchema = z.object({
  roles: z.array(z.enum(RoleUser)),
  nomeCompleto: z.string().trim().min(1, 'Informe o nome completo'),
  dataNascimento: z
    .string()
    .refine(isDataNascimentoValida, 'Informe uma data de nascimento válida'),
  cpf: z.string().refine(isCpfValido, 'CPF inválido'),
  telefone: z.string().refine(isTelefoneValido, 'Telefone inválido'),
});

export type OnboardingSchemaData = z.infer<typeof onboardingSchema>;
