FROM node:16-alpine as builder
ARG ENV
ENV PROJECT_ENV=${ENV}
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:${PROJECT_ENV}

FROM nginx:1.16-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build/ /var/www/
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
