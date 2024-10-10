# Planning Project-Soccer

### => Start project 
```
nest new 'name-project'
```

### => Install Prisma

```
npm install @prisma/client
npm install prisma --save-dev
```

## => Start Prisma

```
npx prisma init
```

### => Config ```prisma/schema.prisma```

```

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "linux-arm64-openssl-3.0.x"] // configuration to use docker. without docker you don't need this part
}

datasource db {
  provider = "postgresql" // or another bank
  url      = env("DATABASE_URL")
}

model User {
  id       Int          @id @default(autoincrement())
  name     String       @db.VarChar(100)
  surname  String       @db.VarChar(100)
  email    String       @unique @db.VarChar(100)
  password String       @db.VarChar(100)
  age      Int
  teams    TeamMember[]

  @@map("users")
}

```

### => Config file .env

```
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

### => Config file Dockerfile

```
# Usar a imagem base do Node.js
FROM node:18

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Rodar o Prisma
RUN npx prisma generate

# Expor a porta 3000
EXPOSE 3000

# Iniciar a aplicação
CMD ["npm", "run", "start:dev"]

```

### => Config file docker-compose.yml

```
version: '3.8'
services:
  postgres:
    image: postgres:14
    container_name: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydatabase
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data

  nestjs:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - '3000:3000'
    depends_on:
      - postgres
    environment:
      DATABASE_URL: postgres://user:password@postgres:5432/mydatabase
    volumes:
      - .:/usr/src/app

volumes:
  postgres_data:

```

### => Generate DB in Prisma

```
npx prisma generate
```

### => Start application and DB with docker

```
docker-compose up --build
```

### => Create migrations with Prisma

```
npx prisma migrate dev
```

# Next continue development
😆