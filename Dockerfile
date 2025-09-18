# Multi-stage build for production static site
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./
RUN npm ci || yarn install || pnpm install

# Copy source
COPY . .

# Build
RUN npm run build || yarn build || pnpm build

# Runtime stage using nginx for static serve
FROM nginx:1.27-alpine AS runtime
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

# Copy build output
COPY --from=build /app/dist ./

# Provide a minimal nginx config (compression + caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
