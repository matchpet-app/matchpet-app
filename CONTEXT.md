# MatchPet App

Frontend do MatchPet — cadastro e onboarding de usuários (adotantes e doadores de pets), autenticação e navegação do fluxo de match entre pets e adotantes.

## Language

**Step**:
Uma tela/etapa dentro de um wizard multi-etapas (ex: onboarding). Cada step vive em `src/containers/onboarding/step<Nome>/` e recebe `onNext`/`onBack` como props.
_Avoid_: Screen, Page, Etapa (usar sempre "step" em código; "etapa" só em texto de UI)

**Adotante**:
Usuário que busca adotar um pet. Tem `nomeCompleto`, `dataNascimento`, `cpf`, `telefone`, `endereco` e `moradia` no backend. Não tem email próprio — o email de conta vive em `User`.
_Avoid_: Interessado, Candidato

**Doador**:
Usuário que doa/anuncia pets pra adoção — pode ser pessoa física (`tipo: pessoa_fisica`, identificado por `cpf`) ou abrigo/ONG (`tipo: abrigo_ong`, identificado por `cnpj`). Tem `nomeExibicao`, `telefone`, `endereco`. Não tem `dataNascimento` nem email próprio.
_Avoid_: Ofertante, Anunciante

**Role**:
Um dos perfis que o usuário pode assumir no MatchPet (`adotante`, `doador`, `admin` — ver `RoleUser`). Um mesmo usuário pode acumular mais de uma role (ex: adotante e doador ao mesmo tempo).
_Avoid_: Perfil (usado só como texto de UI, ex: "seleção de perfil"), Tipo de usuário
