#!/bin/bash
# Install dependencies only when needed
FROM node:14.17.3 AS builder
ARG ENV_FILE
WORKDIR /app
COPY package.json ./
RUN yarn install --legacy-peer-deps --network-timeout 1000000
COPY . .
RUN cp .env.example .env
RUN yarn codegen
RUN yarn build

# Production image, copy all the files and run next
FROM node:14.17.3-alpine AS runner
ARG DOCKER_IMAGE_TAG
WORKDIR /app
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
RUN echo "${DOCKER_IMAGE_TAG}" >./public/docker-image.txt
COPY --chmod=775 --from=builder /app/docker-entrypoint.sh ./
EXPOSE 3000
ENV PORT 3000
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["node_modules/.bin/next", "start"]