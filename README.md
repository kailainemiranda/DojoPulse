# DojoPulse

> Plataforma web para organizar atividades, turmas e comunicação de um projeto social de artes marciais.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-00d2ff)
![Tecnologias](https://img.shields.io/badge/HTML%20%7C%20CSS%20%7C%20JavaScript-111827)
![Hospedagem](https://img.shields.io/badge/hospedagem-GitHub%20Pages-a812ed)

**Aluna:** Kailaine Barbosa Miranda  
**RU:** 4832461  
**Repositório:** [kailainemiranda/DojoPulse](https://github.com/kailainemiranda/DojoPulse)  
**Publicação:** GitHub Pages

## Navegação rápida

- [Sobre o projeto](#sobre-o-projeto)
- [Objetivos](#objetivos)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como executar](#como-executar-localmente)
- [Como publicar](#como-publicar-no-github-pages)
- [Diagramas](#diagramas)

## Visão geral

O DojoPulse foi desenvolvido para organizar as atividades de uma academia de artes marciais e facilitar o acesso às informações por alunos, professores e administradores. A aplicação apresenta turmas, professores, horários, graduações e avisos em uma interface simples, responsiva e visualmente moderna.

O projeto foi construído como uma aplicação estática utilizando HTML, CSS e JavaScript. Nesta versão acadêmica, os dados de cadastro são armazenados localmente no navegador por meio do `localStorage`.

## Diferenciais

- Interface responsiva para computador e celular.
- Navegação simples e objetiva.
- Separação entre acesso de aluno e administrador.
- Identidade visual própria com tema escuro e cores neon.
- Publicação gratuita e acessível pela internet.

## Objetivos

- Desenvolver uma plataforma web responsiva para um projeto social de artes marciais.
- Permitir o cadastro de participantes interessados nas atividades.
- Separar o acesso de administradores e alunos.
- Disponibilizar informações sobre turmas, professores, horários e graduações.
- Permitir que o administrador consulte os cadastros realizados.
- Facilitar a comunicação por meio de avisos da academia.
- Publicar o projeto gratuitamente no GitHub Pages.

## Funcionalidades

### Área pública

- Apresentação do projeto.
- Identidade visual escura com cores neon.
- Informações sobre turmas, graduações e avisos.
- Acesso ao cadastro e ao login.

### Área do aluno

- Consulta de turmas.
- Visualização de professores e horários.
- Consulta de graduações.
- Leitura de avisos importantes.
- Acesso restrito aos próprios recursos da academia.

### Área administrativa

- Login exclusivo do administrador.
- Consulta dos cadastros feitos na plataforma.
- Visualização de nome, e-mail, telefone, documento e data do cadastro.

## Fluxo de utilização

```text
Página inicial
	↓
Escolha: criar conta ou entrar
	↓
Validação dos dados
	↓
Aluno: turmas, professores, horários, graduações e avisos
Administrador: consulta dos cadastros realizados
```

O aluno não acessa os dados de outros participantes. A área administrativa é exibida somente quando as credenciais administrativas são validadas.

## Perfis de acesso

O sistema possui dois perfis:

- **Aluno:** acessa turmas, professores, horários, graduações e avisos.
- **Administrador:** consulta os cadastros realizados na plataforma.

As credenciais administrativas são destinadas somente à demonstração do projeto e não são exibidas nesta documentação pública. Como o projeto utiliza `localStorage`, os dados ficam no navegador utilizado e não representam um banco de dados seguro para produção.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura das páginas, formulários e painel |
| CSS3 | Layout, responsividade e identidade visual |
| JavaScript | Navegação, cadastro, login e permissões |
| localStorage | Persistência local dos dados de demonstração |
| GitHub Pages | Hospedagem gratuita da aplicação |
| Mermaid e SVG | Diagramas da metodologia do projeto |

## Estrutura do repositório

```text
DojoPulse/
├── index.html                    # Landing, cadastro, login e painel
├── css/
│   └── styles.css                # Estilos, tema neon e responsividade
├── javascript/
│   └── app.js                    # Navegação e autenticação local
├── diagramas/
│   ├── diagrama-dojopulse.md     # Diagramas em Mermaid
│   └── metodologia-dojopulse.svg # Fluxograma visual para o Word
└── LICENSE                       # Licença do repositório
```

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra a pasta no VS Code.
3. Abra o arquivo `index.html` no navegador.
4. Para atualizar automaticamente durante o desenvolvimento, use a extensão **Live Server**.
5. Clique em **Criar minha conta** para testar o cadastro de aluno.
6. Use **Entrar** com o e-mail cadastrado para testar o acesso de aluno.
7. Para testar a área administrativa, utilize as credenciais fornecidas separadamente para a apresentação do projeto.

Não é necessário instalar Node.js, PHP, Composer ou executar `npm install` nesta versão.

### Alternativa com Live Server

1. Instale a extensão **Live Server** no VS Code.
2. Abra o arquivo `index.html`.
3. Clique com o botão direito e selecione **Open with Live Server**.
4. O navegador abrirá uma URL local, normalmente iniciada por `http://127.0.0.1`.

## Como publicar no GitHub Pages

1. Faça o commit das alterações:

```bash
git add .
git commit -m "Atualiza projeto DojoPulse"
git push origin main
```

2. No GitHub, abra **Settings > Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**.
6. Aguarde a publicação do site pelo GitHub.

Endereço esperado:

```text
https://kailainemiranda.github.io/DojoPulse/
```

## Metodologia resumida

O desenvolvimento foi dividido em definição do tema, levantamento das necessidades, planejamento das telas, desenvolvimento da estrutura HTML, criação da identidade visual em CSS, implementação das funções em JavaScript, cadastro dos perfis de acesso, testes, documentação e publicação.

O fluxograma visual está disponível em [metodologia-dojopulse.svg](diagramas/metodologia-dojopulse.svg) e pode ser inserido no Word como imagem.

## Diagramas

- [Diagramas em Mermaid](diagramas/diagrama-dojopulse.md)
- [Fluxograma visual para Word](diagramas/metodologia-dojopulse.svg)

## Limitações e evolução futura

A versão atual é um protótipo estático. Para uso real, recomenda-se criar uma API, utilizar banco de dados, proteger as senhas com hash, validar permissões no servidor, implementar recuperação de senha e configurar backups.

## Estado da entrega

- [x] Interface inicial desenvolvida.
- [x] Cadastro de participantes.
- [x] Login de aluno.
- [x] Login administrativo.
- [x] Área de turmas, graduações e avisos.
- [x] Tabela administrativa de cadastros.
- [x] Layout responsivo.
- [x] Diagrama da metodologia.
- [x] README técnico e instruções de execução.
- [x] Código versionado no GitHub.

## Autoria

Projeto desenvolvido por **Kailaine Barbosa Miranda**, RU **4832461**, como proposta de uma solução digital para apoiar atividades de uma academia de artes marciais.
