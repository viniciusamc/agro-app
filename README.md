# TO-DO WEB APP

---

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
