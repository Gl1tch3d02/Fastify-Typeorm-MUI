FROM node:20-alpine as build

WORKDIR /build

ENV NODE_ENV="production"

COPY package.json package-lock.json ./
COPY client/package.json client/package-lock.json ./client/
COPY server/package.json server/package-lock.json ./server/

RUN npm run install

COPY . .

RUN npm run build
RUN rm -rf ./server/node_modules/ && npm run server:install-prod


FROM node:20-alpine

WORKDIR /app

COPY package.json ./

COPY --from=build /build/server/node_modules/ ./server/node_modules/
COPY --from=build /build/server/build/ ./server/build/
COPY --from=build /build/client/dist/ ./client/dist/

VOLUME ["/app/ssl"]
VOLUME ["/app/public"]

CMD npm run start
