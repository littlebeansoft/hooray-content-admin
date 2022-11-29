#!/bin/sh
# Install dependencies only when needed
FROM node:18 AS builder
ARG ENV_FILE
WORKDIR /app
COPY package.json yarn.lock ./ 
RUN yarn install --network-timeout 1000000
COPY . .
RUN yarn codegen
RUN cp .env.example .env
RUN yarn build

# Production image, copy all the files and run next
FROM nginx:1-alpine  AS runner
WORKDIR /usr/share/nginx/html
ARG DOCKER_IMAGE_TAG
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build ./
COPY --chmod=775 --from=builder /app/docker-entrypoint.sh /docker-entrypoint.d
RUN echo "${DOCKER_IMAGE_TAG}" > docker-image.txt
EXPOSE 80
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]