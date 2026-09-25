## Diagrama do projeto

O arquivo [diagrama-dojopulse.md](diagrama-dojopulse.md) contém os diagramas Mermaid do fluxo da aplicação, perfis de acesso, estrutura tecnológica e cadastro de dados.
# DojoPulse

Sistema web para uma academia de artes marciais e projeto social. A aplicação foi criada com HTML, CSS e JavaScript puro, sem framework e sem dependências de instalação.

## Funcionalidades

- Página inicial responsiva com identidade visual escura e neon.
- Cadastro de alunos.
- Login de alunos.
- Área do aluno com turmas, professores, horários, graduações e avisos.
- Área administrativa protegida por credenciais para consultar os cadastros realizados.
- Dados de demonstração salvos no `localStorage` do navegador.
- Publicação compatível com GitHub Pages.

## Acesso administrativo de demonstração

- E-mail: `adm@gmail.com`
- Senha: `adm 2026`

Essas credenciais estão no código apenas para demonstração acadêmica. Para produção, use uma API, banco de dados no servidor e senhas protegidas por hash. O `localStorage` não é um banco seguro para dados reais.

## Tecnologias utilizadas

- **HTML5:** estrutura das páginas, formulários, navegação e painel.
- **CSS3:** layout responsivo, tema escuro, cores neon e componentes visuais.
- **JavaScript:** troca de telas, cadastro, login, controle de acesso e armazenamento local.
- **Google Fonts:** Space Grotesk e DM Sans.
- **GitHub Pages:** hospedagem estática gratuita.

## Estrutura do projeto

```text
index.html   Estrutura da landing page, cadastro, login e painel
styles.css   Identidade visual, componentes e responsividade
app.js       Navegação, autenticação local e área administrativa
README.md    Documentação do projeto
.gitignore   Arquivos ignorados pelo Git
.nojekyll    Permite publicação estática direta no GitHub Pages
```

## Como executar no computador

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo `index.html` no navegador; ou instale a extensão **Live Server** e clique em **Open with Live Server**.
3. Para testar o administrador, abra **Entrar** e use as credenciais acima.
4. Para testar um aluno, use **Criar minha conta** e faça um cadastro.

O projeto não precisa de `npm install`, servidor PHP ou banco de dados para esta versão demonstrativa.

## Como publicar no GitHub Pages

### Pelo site do GitHub

1. Acesse `https://github.com` e crie um repositório novo, por exemplo `dojopulse`.
2. Deixe o repositório público e crie-o sem adicionar README, pois este projeto já possui um.
3. No repositório, clique em **Add file > Upload files**.
4. Envie `index.html`, `styles.css`, `app.js`, `README.md`, `.gitignore` e `.nojekyll`.
5. Clique em **Commit changes**.
6. Abra **Settings > Pages**.
7. Em **Build and deployment**, escolha **Deploy from a branch**.
8. Selecione a branch `main`, a pasta `/ (root)` e clique em **Save**.
9. Após alguns minutos, o GitHub exibirá o endereço público do site.

### Pelo terminal

Depois de criar o repositório vazio no GitHub, execute dentro desta pasta:

```bash
git init
git add .
git commit -m "Cria o DojoPulse"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua `SEU-USUARIO/SEU-REPOSITORIO` pelo endereço do seu repositório. Depois ative o GitHub Pages em **Settings > Pages** usando `main` e `/ (root)`.

## Como o projeto foi criado

O desenvolvimento começou com a definição das telas essenciais da academia: apresentação, cadastro, login e área interna. A interface foi construída primeiro com HTML semântico, depois recebeu a identidade visual em CSS e, por fim, as interações foram conectadas com JavaScript.

O cadastro adiciona os dados ao armazenamento local do navegador. No login, o sistema diferencia o acesso administrativo do acesso de aluno. Administradores visualizam a tabela de cadastros; alunos visualizam somente as atividades da academia.

## Próxima evolução recomendada

Para transformar o protótipo em um sistema real, conecte os formulários a um backend com banco de dados, autenticação segura, controle de permissões no servidor, recuperação de senha e backups.
