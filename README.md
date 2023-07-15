# TO-DO WEB APP

---

### Estrutura

O Projeto está estruturado em duas pastas, a API que contém o código back end do projeto, no qual existe um arquivo de configuração de váriaveis de ambiente .env que você pode alterar, na pasta src contém uma pasta de Controller que possui o CRUD das Tarefas, depois o banco de dados (SQLITE) e as configurações do banco de dados como as migrations. Na pasta routes tem todas as rotas que a aplicação usa e na pasta Utils existe um arquivo para mensagem de erros especificas.

---

### Executar o Projeto

Esse projeto é dividido em duas partes, a API, e a parte WEB, para executar o projeto em seu computador sem problemas faça o seguinte:

```bash

  ## API
  git clone git@github.com:viniciusamc/agro-app.git

  cd agro-app

  cd api

  yarn install

  yarn dev ## PORTA PADRÃO - 3333

  ## Comando de uma linha
  git clone git@github.com:viniciusamc/agro-app.git;cd agro-app;cd api;yarn install;yarn dev

```

Com um client REST você já consegue utilizar a aplicação, sem precisar de interface gráfica, endpoints:

```
  - POST {title, description} /notes
  - GET /notes ## Lista todas as Notas
  - DELETE /notes/id ## Deleta a nota pelo id
  - PUT /notes/id ## Altera o status da nota
```

Para conseguir ver na web digite o seguinte comando:

```bash
  ## Volte para a pasta raiz ./agrofauna

  cd web

  npm install

  npm dev ## Se você editou a porta da API faça a seguinte alteração: ./src/services/api.js e altere a URL

```

Após fazer isso, no terminal irá aparecer a URL.

---

### Técnologias Utilizadas

- NodeJs
- Express
- React
- KnexJs
- SQLITE
- Axios/Cors
