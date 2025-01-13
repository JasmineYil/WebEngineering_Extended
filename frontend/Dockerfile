# Stage 1: Development
FROM node:20-alpine AS dev

WORKDIR /app

COPY package.json yarn.lock ./
RUN corepack enable && yarn install --ignore-platform

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]

# Stage 2: Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN corepack enable && yarn install --ignore-platform

COPY . .

RUN yarn build

# Stage 3: Production
FROM nginx:alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
