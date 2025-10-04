# Sistema de Gerenciamento de Bens - Escritório de Advocacia

Este é um aplicativo React Native desenvolvido com Expo Router para gerenciamento de bens passivos de um escritório de advocacia.

## 📱 Funcionalidades Implementadas

### ✅ RF-001 - Estrutura de Navegação
- Aplicativo com navegação em tabs na parte inferior
- Duas abas: "Gerenciamento" e "Empresa"
- Tela inicial é "Gerenciamento"
- Navegação fluida entre as abas

### ✅ RF-002 - Tela de Gerenciamento (CRUD)
- **Formulário (Topo)**: Campos para nome, descrição e valor do bem
- **Listagem (Abaixo)**: Lista dos bens cadastrados
- **Estado**: useState único gerencia array de bens
- **Validações**: Campos obrigatórios e valor numérico
- **Feedback**: Mensagem quando lista vazia ("Nenhum bem cadastrado")
- **Limpeza**: Campos limpos após salvar

### ✅ RF-003 - Funcionalidade de Exclusão
- Botão "Excluir" em cada item da lista
- Confirmação antes da exclusão
- Remoção do item do estado e interface
- Feedback visual da ação

### ✅ RF-004 - Tela de Dados da Empresa
- Tela estática com informações fictícias da empresa
- Dados exibidos: Nome, CNPJ, Endereço, Telefone, E-mail, Website
- Design organizado com ícones
- Seção "Sobre a Empresa"

## 🎨 Requisitos Não Funcionais Atendidos

### ✅ RNF-001 - Usabilidade e UX
- Interface clara e intuitiva
- Botões bem identificados
- Feedback visual nas interações
- Padrão visual consistente entre telas
- Cores e tipografia profissionais

### ✅ RNF-002 - Desempenho
- Transições instantâneas entre abas
- Atualizações de interface sem atrasos
- Digitação fluida nos campos de texto
- Otimização com componentes funcionais

### ✅ RNF-003 - Qualidade e Organização do Código
- **Nomenclatura**: camelCase/PascalCase consistente
- **Estilização**: StyleSheet.create() sem estilos inline
- **Código Limpo**: Sem código comentado ou não utilizado
- **Componentização**: Separação de responsabilidades
- **Arquitetura**: Organização modular por tipos, components, utils, styles

### ✅ RNF-004 - Compatibilidade
- Compatível com Expo Go
- Layout responsivo para smartphones
- Testado em diferentes tamanhos de tela

### ✅ RNF-005 - Confiabilidade
- Não há crashes com campos vazios
- Validações impedem dados inválidos
- Operações CRUD estáveis
- Navegação robusta

## 🏗️ Arquitetura do Projeto

```
/app/
├── _layout.tsx          # Layout principal com tabs
├── index.tsx            # Tela de Gerenciamento
└── empresa.tsx          # Tela da Empresa

/components/
├── BemForm.tsx          # Formulário de cadastro
└── BemItem.tsx          # Item da lista de bens

/types/
└── bem.ts               # Interface Bem

/styles/
└── commonStyles.ts      # Estilos compartilhados

/utils/
└── helpers.ts           # Funções utilitárias
```

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o Expo:
```bash
npm start
```

3. Use o Expo Go para escanear o QR Code ou execute em simulador

## 💡 Decisões Técnicas

- **Expo Router**: Para navegação nativa e performance
- **TypeScript**: Para tipagem estática e melhor DX
- **Componentização**: Separação clara de responsabilidades
- **Estado Local**: useState para simplicidade (dados em memória)
- **Validações**: Feedback claro para o usuário
- **Design System**: Estilos consistentes e reutilizáveis

## 📱 Telas do Aplicativo

### Gerenciamento
- Formulário de cadastro no topo
- Lista de bens na parte inferior
- Botões de ação bem identificados
- Contador de itens cadastrados

### Empresa
- Informações organizadas por seções
- Ícones para melhor identificação visual
- Layout profissional e limpo
- Informações completas da empresa fictícia

---

**Desenvolvido seguindo todas as especificações dos requisitos funcionais e não funcionais.**