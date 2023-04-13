
# Food Explorer API

Backend para a aplicação Food Explorer, um cardápio digital para um restaurante fictício desenvolvido no final do curso Explorer da Rocketseat. Esse projeto foi inteiramente construído por mim, com exceção do Layout que já é disponibilizado no Figma.


## Variáveis de Ambiente

Esse projeto usa variáveis de ambiente que ficam em um arquivo ".env". Eu deixei um modelo das variáveis no arquivo ".env.example" Se nenhum valor for atribuído, serão usados os valores padrão.


## Deploy

O deploy foi feito com o plano gratuito da plataforma Render. Por ser gratuito, existem algumas limitações como o serviço entrar em modo de espera quando não recebe nenhum request por um determinado tempo. Os efeitos disso estão melhor explicados no repositório do Frontend.

🔗 Link da API: https://food-explorer-j7t8.onrender.com


## Frontend

Para acessar o projeto completo, não esqueça de verificar o repositório do Frontend, lá está o link do app com mais informações importantes.

🔗 Link: [FoodExplorer_Frontend](https://github.com/sogbog/FoodExplorer_Frontend)


## Tecnologias utilizadas

**Front-End:** HTML, CSS, JavaScript, React.js, Vite, Styled Components, Axios

**Back-End:** JavaScript, Node.js, SQL, SQLite, Express, Knex.js, JWT, Multer, dotenv, PM2

**Conceitos importantes utilizados:** SPA, Diretrizes REST, Migrações de banco de dados, Autenticação com JWT, CORS


## Rodando localmente

Se você quiser baixar e executar o projeto em sua máquina,primeiro instale as dependências com:

```bash
  npm install
```

Com as dependências instaladas, você pode rodar a API em modo de desenvolvimento com:

```bash
  npm run dev
```

Ou a versão de produção(PM2) com:

```bash
  npm start
```

Caso você delete o banco de dados, para rodar as migrações use:

```bash
  npm run migrate
```
