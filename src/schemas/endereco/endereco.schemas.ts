import { z } from 'zod';
import { UF } from '../../types/uf/uf';

export const enderecoSchema = z.object({
  cep: z
    .string()
    .trim()
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido'),
  uf: z.enum(UF, { message: 'Selecione um estado' }),
  cidade: z.string().trim().min(1, 'Informe a cidade'),
  bairro: z.string().trim().optional(),
  logradouro: z.string().trim().optional(),
  numero: z.string().trim().optional(),
  complemento: z.string().trim().optional(),
});

export type EnderecoFormData = z.infer<typeof enderecoSchema>;
