# 📝 Lista de Tarefas – Aplicação Full-Stack

Aplicação **Full-Stack de gestão de tarefas (To-Do List)** desenvolvida com **Node.js, MongoDB e React**, permitindo criar, listar, concluir e remover tarefas, com foco numa boa experiência de utilizador.

Este projeto foi desenvolvido no âmbito de um **desafio técnico Full-Stack**.

## Funcionalidades

* Criar tarefas com:

  * título
  * prioridade (baixa, média, alta)
  * data de início e data limite
* Listar todas as tarefas
* Marcar tarefas como concluídas
* Remover tarefas
* Feedback visual de sucesso e erro
* Validação de regras no backend

---

## Estrutura do Projeto

```
/
├── backend/          # API REST
├── todo-frontend/    # Frontend
├── run.bat           # Script para iniciar a app no Windows
├── run.sh            # Script para iniciar a app no Linux
├── run_mac.sh        # Script para iniciar a app no macOS
└── README.md
```

---

## Tecnologias Utilizadas

### Backend

* Node.js
* Express
* MongoDB
* Mongoose

### Frontend

* React
* Vite
* TypeScript
* Material UI
* Axios

---

## Pré-requisitos

Antes de começar, certifique-se que tem instalado:

* **Node.js** (v18 ou superior)
* **npm**
* **MongoDB** (local ou remoto)

---

## Instalação

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
```

---

### 2. Instalar dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd todo-frontend
npm install
```

---

## 3. Configuração da Base de Dados (MongoDB)

Este projeto utiliza **MongoDB** como base de dados.

Por motivos de segurança, as credenciais da base de dados **não estão incluídas no repositório**.  
Cada utilizador deve configurar o seu próprio acesso através de um ficheiro `.env`.

### 3.1 Criar o ficheiro `.env`

1. Na pasta `backend`, crie um ficheiro chamado **`.env`**
2. Adicione o seguinte conteúdo:

```env
MONGO_URI=<SUA_MONGODB_URI_AQUI>
PORT=3000
````

### 3.2 Obter uma MongoDB URI

Pode usar uma das seguintes opções:

#### Opção A — MongoDB Atlas (Recomendado)

1. Aceda a: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crie uma conta gratuita
3. Crie um **Cluster Gratuito**
4. Crie um utilizador da base de dados (username e password)
5. Copie a **Connection String (MongoDB URI)**

Exemplo de URI:

```text
mongodb+srv://<username>:<password>@cluster0.mongodb.net/todolist
```

Cole esta URI no ficheiro `.env` no campo `MONGO_URI`.

#### Opção B — MongoDB Local

Se tiver MongoDB instalado localmente:

```env
MONGO_URI=mongodb://localhost:27017/todolist
PORT=3000
```

---

## 4. Executar a aplicação

### Opção 1 – Manualmente

Em dois terminais separados, na raíz do projeto:

**Backend**

```bash
cd backend
npm run dev
```

**Frontend**

```bash
cd todo-frontend
npm run dev
```

---

### Opção 2 – Scripts

Foram criados scripts para facilitar a execução da aplicação consoante o sistema operativo:

#### Windows

```bash
run.bat
```

#### Linux / macOS

```bash
chmod +x run.sh
./run.sh
```
---

## Acesso à aplicação

* **Frontend:** [http://localhost:5174](http://localhost:5174)
* **Backend (API):** [http://localhost:3000/api](http://localhost:3000/api)

---

## Decisões Técnicas

* Separação clara entre frontend e backend
* Validações críticas realizadas no backend
* Feedback de erro e sucesso enviado do backend para o frontend
* UI construída com Material UI para consistência visual
* Código organizado por responsabilidades (components, api, models)

---

## Possíveis Melhorias Futuras

* Autenticação de utilizadores
* Filtros e ordenação de tarefas
* Testes unitários
* Deploy da aplicação

---

## Autor

Projeto desenvolvido por **[Regina Silva]**
No âmbito de um desafio técnico Full-Stack.

