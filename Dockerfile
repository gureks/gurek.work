# Multi-stage build: build with Node, serve static with serve on port 1234
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./
RUN npm ci || yarn install || pnpm install

# Copy source
COPY . .

# Build
RUN npm run build || yarn build || pnpm build

# Runtime stage using a minimal Node image with 'serve'
FROM node:20-alpine AS runtime
WORKDIR /app

# Install a tiny static file server
RUN npm i -g serve@14

# Copy build output
COPY --from=build /app/dist ./dist

# Expose and run on 1234
EXPOSE 1234
CMD ["serve", "-s", "dist", "-l", "1234"]
