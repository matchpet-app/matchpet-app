# Onboarding é um único react-hook-form validado por step via trigger()

O onboarding é um wizard multi-step (`selecaoPerfil` → `informacoesAdotante`/`informacoesDoador` → ...), mas usa uma única instância de `useForm` e um único `onboardingSchema` (zod) compartilhados via `FormProvider`, em vez de um form/schema separado por step. Campos como `cpf` e `telefone` são preenchidos uma vez e reaproveitados entre steps (ex: no cadastro de doador quando o usuário selecionou ambas as roles), o que só é direto com estado compartilhado. Validação por step é feita chamando `trigger([...campos do step])` no botão "Continuar", em vez de validar o form inteiro — assim campos de steps futuros (ainda vazios) não bloqueiam o avanço do step atual.

Consequência: novos campos entram todos no mesmo `onboardingSchema` como obrigatórios "de verdade" (sem `.optional()` artificial), e cada step precisa saber explicitamente quais dos seus campos passar pro `trigger()`.
