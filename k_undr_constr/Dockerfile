########################################
# Stage 1 — Build the production bundle
########################################
FROM node:20-alpine AS builder

# Create working dir
WORKDIR /app

# Copy dependency manifests first to leverage Docker cache
COPY package.json package-lock.json ./

# Install all deps (we need dev-deps to run the build)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build for production -> /app/dist
RUN npm run build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

########################################
# Stage 2 — Lightweight web server
########################################
FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./src/assets/favicon.svg /usr/share/nginx/html/assets/favicon.svg
COPY ./src/assets/favicon.svg /usr/share/nginx/html/favicon.svg

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]