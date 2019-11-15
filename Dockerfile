FROM node:8 as BASE

WORKDIR /src

ADD package.json ./
ADD yarn.lock ./

RUN yarn

FROM node:8

WORKDIR /src

COPY --from=BASE /src ./
COPY . ./

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "serve" ]
