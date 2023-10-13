# Fastify + MongoDB + Bun

This project was made to centralize my studies about Fastify with Bun. It implements a simple user CRUD following Clean Architecture.


## Running locally

- This project was made using [**Bun 1.0.5**](https://bun.sh/)
- You can use [Docker](https://www.docker.com/) to run the project too

### Running without Docker

Clone the project

```bash
  git clone git@github.com:willy-r/fastify-mongodb-api.git
```

Enter on the project directory

```bash
  cd fastify-mongodb-api
```

Install dependencies

```bash
  bun i
```

Rename `.env.example` to `.env` (consult [Environment Variables](#environment-variables))

```bash
  cp .env.example .env
```

Run MongoDB database with `docker-compose`

```bash
  docker compose up -d mongodb
```

Start the server

```bash
  bun start
```

### Running with Docker

Clone the project

```bash
  git clone git@github.com:willy-r/fastify-mongodb-api.git
```

Enter on the project directory

```bash
  cd fastify-mongodb-api
```

Run the project using `docker-compose`

```bash
  docker compose up -d --build
```


## Running tests

To run the tests

```bash
  bun test
```


## Environment Variables

You need the following environment variables to run this project

`MONGODB_URL`

`APP_PORT`

`APP_HOST`


## Authors

- [@willy-r](https://github.com/willy-r)
