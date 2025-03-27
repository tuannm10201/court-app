FROM node:22-alpine AS builder

WORKDIR /app

ADD ./package.json ./package-lock.json ./

RUN npm install

COPY . .

RUN NODE_OPTIONS='--max_old_space_size=2048' npm run build:prod

FROM bitnami/nginx:1.27.4

FROM docker.io/bitnami/nginx:1.27-debian-12

COPY --from=builder /app/dist /opt/bitnami/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

