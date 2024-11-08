# Use the official Bun image
FROM oven/bun:1 AS base
WORKDIR /app

# install dependencies
COPY package.json bun.lockb ./
RUN bun install
COPY . .

# Install with NODE_ENV=development (include devDependencies)
FROM base AS development
USER bun
EXPOSE 3000
CMD ["bun", "dev"]

# Install with NODE_ENV=production (exclude devDependencies)
FROM base AS production 
RUN bun run build 
USER bun
EXPOSE 3000
CMD ["bun", "start"]
