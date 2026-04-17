FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM nginx:stable-alpine AS prod-stage
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]