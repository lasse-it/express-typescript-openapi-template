FROM node:lts-alpine3.17 as build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:lts-alpine3.17
WORKDIR /app
COPY --from=build /app/build /app
EXPOSE 8080
CMD ["node", "/app/src/index.js"]