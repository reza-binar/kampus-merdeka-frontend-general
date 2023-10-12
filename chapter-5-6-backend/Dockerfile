FROM node:18-alpine

ENV PORT=$port
ENV NODE_ENV=production

EXPOSE $PORT

WORKDIR /app
COPY package.json ./
RUN apk add g++ make py3-pip
RUN npm install -g pnpm
RUN pnpm install --production=true && pnpm store prune
RUN apk add --no-cache tini
COPY . .
CMD ["pnpm", "run", "start"]