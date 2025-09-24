# Multi-stage build
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve@14

# Copy build output (✅ check this path!)
COPY --from=build /app/dist ./dist

EXPOSE 1234
CMD ["serve", "-s", "dist", "-l", "1234"]
