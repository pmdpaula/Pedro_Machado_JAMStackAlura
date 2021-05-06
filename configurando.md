# React Components Monorepo with Typescript
Configuração de um monorepo e workspaces com um repositório comum de componentes

Obs.: É preciso usar o yarn para as configurações de workspaces seguintes.

## Referências
Workspaces  https://classic.yarnpkg.com/en/docs/workspaces/
Next.js com Typescript e styled-components  https://github.com/vercel/next.js/tree/canary/examples/with-typescript-styled-components

## Diretórios
raiz: monorepo
  projeto
    modulo-comum  -> diretório dos componentes
    simple-site   -> diretório de aplicação web
    portifolio    -> diretório de aplicação web


## Configuração inicial
### Os diretórios de projeto
/> yarn init -y
.../projetos> mkdir modulo-comum
.../modulo-comum> yarn init -y
.../projetos> yarn create next-app --example with-typescript-styled-components simple-site
.../portifolio> # este veio de um outro projeto e deverá ser configurado com o typescript

### Configurando os Workspaces
Mexer nos packages.json
Em cada um dos diretórios de projetos deve-se nomear com "@<nomebase>/<nomeprojeto>":
eg. @pmdpaula/portofolio
    @pmdpaula/modulo-comum
    @pmdpaula/simple-site

No package.json da raiz inserir a seguinte configuração:
  "workspaces": {
    "packages": [
      "projetos/*"
    ]
  }

O asterísco insere todos os diretórios abaixo de projetos. Pode-se colocar diretório a diretório.

#### Depenência comum
Como o modulo-comum é onde estarão os components comuns a todos os projetos, deve-se colocar este como dependencia dos demais no package.json.
eg.
[...]
  "dependencies": {
    "@pmdpaula/modulo-comum": "*",
[...]

### Configuração do Git
/> npx gitignore node
/> git init
.../simple-site> rm -rf .git
.../portifolio> rm -rf .git

### Arquivos na raiz
.editorconfig         Criado com o VS Code
.prettierrc.json      Trouxe de projeto anterior
.eslintrc.js          Trouxe de projeto anterior
.gitignore            npx gitignore node

### Instalação dos pacotes
Remover os diretórios .next e node_modules que estiverem nos diretórios dos projetos

/> yarn install
Esta execução pegará o package.json de todos os projetos e instalará seus pacotes.
Se usarmos a mesma versão de um pacote em mais de um projeto o download será feito apenas uma vez e distribuído.

A instalação adicional de pacotes em cada projetos deve ser feito no diretório raiz da forma a seguir:
Ex:
/> yarn workspace @pmdpaula/simple-site add yarn add next-transpile-modules --dev

Com isto o controle de dependência dos pacotes será gerido pelo yarn.lock da raiz.

## Execução em cada Workspace
Ex: Iniciar o simple-site através da raiz
/> yarn workspace @pmdpaula/simple-site dev

## Usando componentes comuns do modulo-comum
Dependência: next-transpile-modules

Instalando a dependência nos projetos que usarão os componentes comuns
/> yarn workspace @pmdpaula/simple-site add yarn add next-transpile-modules next-compose-plugins
/> yarn workspace @pmdpaula/instalura add yarn add next-transpile-modules next-compose-plugins
/> yarn workspace @pmdpaula/portifolio add yarn add next-transpile-modules next-compose-plugins

## Instalação do Storybook
O projeto sbui será o repositório comum de componentes

/projetos> npx create-react-app sbui --template typescript`
/projetos/sbui> npx sb init
/projetos/sbui> yarn storybook # Para inicar o projeto do storybook

### Ajuste do Storybook para limpar exemplos
Mover o diretório assets e o arquivo Introduction.stories.mdx que estão no diretório stories para o src.
Remover o diretório stories

Ajustar o package.json
/projetos/sbui> rm yarn.lock

/> yarn workspace @pmdpaula/sbui add next-compose-plugins next-compose-plugins
