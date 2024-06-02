# generate a dockerfile to build this bun project
FROM oven/bun:1
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN bun install

COPY . .

RUN bun install

EXPOSE 4000

CMD ["bun", "run", "index.ts"]
