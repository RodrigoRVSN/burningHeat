FROM node

WORKDIR /usr/app

COPY package.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate
EXPOSE 4000
CMD ["npm","run","dev"]