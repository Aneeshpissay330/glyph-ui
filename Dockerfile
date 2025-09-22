# Stage 1: build Storybook static site
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build-storybook

# Stage 2: serve with nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# remove default nginx content
RUN rm -rf ./*

# copy built storybook from builder
COPY --from=builder /app/storybook-static ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
