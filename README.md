<p align="center">
  <h1 align="center">
    Pokédex -  API
  </h1>
</p>

## 💻 Tecnologias Utilizadas

- TypeScript
- Express
- jwt
- bcrypt
- Joi
- Prisma

---

 - O objetivo dessa API é criar times e inserir pokémons aos times.
 - Cada equipe deverá possuir no máximo 6 pokémons, sendo que estes deverão ser de espécies distintas. 
 - Para um melhor entendimento LEIA README =>  https://github.com/BrunooBarross/pokedex-front-react


## 👨🏻‍💻 Instalação

```bash

$ git clone https://github.com/BrunooBarross/pokedex-api-node

$ crie um arquivo .env conforme específicado no .env-example

- No terminal

$ npm i

$ npx prisma migrate dev

$ npm run dev

```

## 🚀 API:

```yml
POST /signup
    - Rota para cadastro de usuários
    - headers: {}
    - body: {
        "email": email@dominio.com
        "password": String - min 4 caracteres
    }
```

```yml
POST /signin
    - Rota para realização de login
    - headers: {}
    - body: {
        "email": email@dominio.com
        "password": String - min 4 caracteres
    }
```

```yml
POST /team/create (authenticated)
    - Rota para cadastro de um time
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {
        titleTeam: String Min 4 caracteres Max 20 caracteres
    }
```

```yml
GET /team (authenticated)
    - Rota que retorna os times do usuário
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
```

```yml
POST /team/insert/pokemon (authenticated)
    - Rota para inserir um pokémon em um time
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {
       pokemonId: id do pokémon,
       teamId: id do time,
       species: string espécie do pokémon
    }
```

```yml
DELETE /team/:teamId (authenticated)
    - Rota para deleter um time e seus pokémons através do paramêtro :teamId
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
```
