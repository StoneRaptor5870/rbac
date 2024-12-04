FROM node:20 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20 as runtime

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

ENV PORT=3000
ENV DATABASE_URL="postgresql://postgres:password@db:5432/mydatabase"
ENV JWT_SECRET=your_jwt_secret_key

CMD ["sh", "-c", "npx prisma migrate dev && node dist/main"]
