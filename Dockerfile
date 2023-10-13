FROM oven/bun:latest

WORKDIR /app

COPY bun.lockb .
COPY package.json .

RUN bun i

COPY src src

EXPOSE 3000

CMD [ "bun", "start" ]
