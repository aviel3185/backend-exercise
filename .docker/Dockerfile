FROM node:16.3.0-alpine AS builder

USER root

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start:prod" ]