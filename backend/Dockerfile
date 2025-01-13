# Stage 1: Development
FROM node:20-alpine AS dev

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

CMD ["yarn", "run", "dev"]

# Stage 2: Build
# Kein Build notwendig!

# Stage 2: Production
FROM node:20-alpine AS prod

WORKDIR /app

COPY package*.json ./
RUN yarn install --production

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]