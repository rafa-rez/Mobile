# Projeto CompJúnior - Trilha de Mobile

## Introdução ao Projeto

Este projeto foi desenvolvido como parte do Processo Seletivo da CompJúnior, na trilha de Mobile. O objetivo principal foi conectar o aplicativo com o conjunto de rotas que permitiriam aos usuários simular um campus virtual básico, proporcionando acesso a suas matérias e algumas informações relevantes, além de um controle importante sobre o DB quando logado como administrador. Tais rotas do backend foram feitas pelo mesmo developer deste app mobile.

## Como Rodar

### Instalação de Dependências

```bash
-> npm install
```

### Comando de Desenvolvimento:

```bash
-> npx expo start
-> Espere a construção do Metro Bundler.
-> Prossiga da forma desejada, através de emulador, apertando a, ou escaneando o código QR com um android que tenha o expo.
```

### Tecnologias

```bash
Tecnologias:
-> React Native.
-> Node.
-> VsCode (de preferência).
-> MongoDB.
-> Andoid Emulator, opcional.
-> Expo app.
```

### Peculiaridades

```bash
-> Apenas contas com email: "adm@adm.com" serão tratadas como administradores.
```

### Rotas

```bash

| Método HTTP | Rota                         | Descrição                                                                                         | Parâmetros                                                 | Middlewares                          |
| ----------- | ---------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------ |
| GET         | `/`                          | Retorna dados resumidos de todos os projetos.                                                     | N/A                                                        | auth, authAdmin                      |
| GET         | `/id/:projectId`             | Retorna dados completos de um projeto com base na ID.                                             | `projectId`: ID do projeto                                 | auth, authAdmin                      |
| GET         | `/:projectSlug`              | Retorna dados completos de um projeto com base no Slug.                                           | `projectSlug`: Slug do projeto                             | auth, authAdmin                      |
| POST        | `/`                          | Cria um novo projeto no banco de dados.                                                           | `Materia, Professores, Cursos`                             | auth, authAdmin                      |
| PUT         | `/:projectId`                | Atualiza os dados de um projeto no banco de dados por comparação.                                 | `projectId`: ID do projeto, `Materia, Professores, Cursos` | auth, authAdmin                      |
| DELETE      | `/:projectId`                | Remove um projeto do banco de dados com base na ID.                                               | `projectId`: ID do projeto                                 | auth, authAdmin                      |
| PUT         | `/curso/:userId`             | Cadastra um curso para um usuário.                                                                | `userId`: ID do usuário, `Curso`                           | auth, authAdmin                      |
| GET         | `/relations/users`           | Obtém todos os usuários e seus cursos.                                                            | N/A                                                        | auth, authAdmin                      |
| GET         | `/subjects/user`             | Obtém todos os projetos relacionados a uma categoria específica (matérias que abrangem um curso). | `Curso`                                                    | auth                                 |
| POST        | `/request`                   | Cria uma requisição para inserção em um curso.                                                    | `requisitor, email, description`                           | auth                                 |
| POST        | `/featured-image/:projectId` | Associa uma imagem destacada a um projeto.                                                        | `projectId`: ID do projeto, imagem (multipart form-data)   | auth, Multer.single('featuredImage') |
| POST        | `/images/:projectId`         | Associa imagens a um projeto.                                                                     | `projectId`: ID do projeto, imagens (multipart form-data)  | auth, Multer.array('images')         |

```

### Developer

```bash
-> Rafael Alves Silva Rezende
```
