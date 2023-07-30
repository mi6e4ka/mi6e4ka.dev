FROM node:20.4.0-alpine as build
WORKDIR /usr/app
COPY . /usr/app/
RUN npm ci
RUN npm run build
FROM nginx:1.25.1-alpine-slim
EXPOSE 80
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html