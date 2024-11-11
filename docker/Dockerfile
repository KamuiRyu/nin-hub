FROM node:lts AS base

ARG BUN_VERSION=1.1.34

WORKDIR /app

# Install official Bun
RUN apt update && apt install -y bash curl unzip && \
    curl https://bun.sh/install | bash -s -- bun-v${BUN_VERSION}
ENV PATH="${PATH}:/root/.bun/bin"

# install dependencies
COPY package.json bun.lockb ./
RUN bun install
COPY . .

# Generate Prisma Client
RUN bun prisma generate

# Install with NODE_ENV=development (include devDependencies)
FROM base AS development
EXPOSE 3000
CMD ["bun", "dev"]

# Install with NODE_ENV=production (exclude devDependencies)
FROM base AS production 
RUN bun run build 
EXPOSE 3000
CMD ["bun", "start"]
