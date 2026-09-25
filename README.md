# DojoPulse

> Plataforma web para apoiar as atividades de um projeto social de artes marciais.

**Aluna:** Kailaine Barbosa Miranda  
**RU:** 4832461  
**Repositório:** [kailainemiranda/DojoPulse](https://github.com/kailainemiranda/DojoPulse)  
**Publicação:** GitHub Pages

## Sobre o projeto

O DojoPulse foi desenvolvido para organizar as atividades de uma academia de artes marciais e facilitar o acesso às informações por alunos, professores e administradores. A aplicação apresenta turmas, professores, horários, graduações e avisos em uma interface simples, responsiva e visualmente moderna.

O projeto foi construído como uma aplicação estática utilizando HTML, CSS e JavaScript. Nesta versão acadêmica, os dados de cadastro são armazenados localmente no navegador por meio do `localStorage`.

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

## Acesso administrativo de demonstração

```text
E-mail: adm@gmail.com
Senha: adm 2026
```

Essas credenciais servem apenas para demonstração acadêmica. Como o projeto utiliza `localStorage`, os dados ficam no navegador utilizado e não representam um banco de dados seguro para produção.

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
├── styles.css                    # Estilos, tema neon e responsividade
├── app.js                        # Regras de navegação e autenticação local
├── diagrama-dojopulse.md         # Diagramas em Mermaid
├── metodologia-dojopulse.svg     # Fluxograma visual para o Word
├── docs/                         # Documentação acadêmica detalhada
│   ├── OBJETIVOS.md
│   ├── METODOLOGIA.md
│   ├── FUNCIONAMENTO.md
│   ├── TESTES.md
│   └── CONSIDERACOES-FINAIS.md
├── .github/workflows/            # Publicação automática do GitHub Pages
├── .gitignore                    # Arquivos ignorados pelo Git
├── .nojekyll                     # Publicação estática direta
└── LICENSE                       # Licença do repositório
```

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra a pasta no VS Code.
3. Abra o arquivo `index.html` no navegador.
4. Para atualizar automaticamente durante o desenvolvimento, use a extensão **Live Server**.
5. Clique em **Criar minha conta** para testar o cadastro de aluno.
6. Use **Entrar** com o e-mail cadastrado para testar o acesso de aluno.
7. Use `adm@gmail.com` e `adm 2026` para abrir a área administrativa.

Não é necessário instalar Node.js, PHP, Composer ou executar `npm install` nesta versão.

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
6. Aguarde a publicação do workflow.

Endereço esperado:

```text
https://kailainemiranda.github.io/DojoPulse/
```

## Metodologia resumida

O desenvolvimento foi dividido em definição do tema, levantamento das necessidades, planejamento das telas, desenvolvimento da estrutura HTML, criação da identidade visual em CSS, implementação das funções em JavaScript, cadastro dos perfis de acesso, testes, documentação e publicação.

O fluxograma visual está disponível em [metodologia-dojopulse.svg](metodologia-dojopulse.svg) e pode ser inserido no Word como imagem.

## Documentação acadêmica

- [Objetivos](docs/OBJETIVOS.md)
- [Metodologia](docs/METODOLOGIA.md)
- [Funcionamento do sistema](docs/FUNCIONAMENTO.md)
- [Testes realizados](docs/TESTES.md)
- [Considerações finais](docs/CONSIDERACOES-FINAIS.md)
- [Diagramas do projeto](diagrama-dojopulse.md)

## Limitações e evolução futura

A versão atual é um protótipo estático. Para uso real, recomenda-se criar uma API, utilizar banco de dados, proteger as senhas com hash, validar permissões no servidor, implementar recuperação de senha e configurar backups.
