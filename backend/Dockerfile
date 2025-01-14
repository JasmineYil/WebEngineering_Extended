# Stage 1: Development
FROM node:20-alpine AS dev

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json ./
RUN yarn install --check-files

COPY . .

CMD ["yarn", "run", "dev"]

# Stage 2: Build
# Kein Build notwendig!

# Stage 2: Production
FROM node:20-alpine AS prod

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN yarn install --check-files --production

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]