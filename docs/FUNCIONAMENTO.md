# Funcionamento do sistema

## 1. Página inicial

A página inicial apresenta o DojoPulse e direciona o visitante para o cadastro ou login.

## 2. Cadastro

O usuário informa nome, e-mail, telefone, documento, tipo de documento e senha. Os dados são validados e armazenados localmente no navegador.

## 3. Login

O sistema verifica as credenciais informadas. O administrador utiliza o acesso `adm@gmail.com` com a senha `adm 2026`. Os demais usuários entram como alunos.

## 4. Área do aluno

O aluno visualiza turmas, professores, horários, graduações e avisos da academia. Ele não acessa os cadastros de outras pessoas.

## 5. Área administrativa

O administrador possui o menu Administração e pode consultar os cadastros feitos na plataforma, incluindo nome, e-mail, telefone, documento e data.

## 6. Armazenamento

A versão demonstrativa utiliza `localStorage`. Isso permite testar o sistema sem servidor, mas os dados ficam apenas no navegador local.
