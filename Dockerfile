# build environment
FROM node:12.10.0 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.1.1 -g --silent
COPY . /usr/src/app

RUN npm run build

# production environment
FROM nginx:1.13-alpine

RUN apk update
RUN apk upgrade
RUN apk add bash

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY --from=builder /usr/src/app/static /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]