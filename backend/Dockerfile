FROM node:16-bookworm-slim

RUN apt-get update && apt-get install -y python3 zip unzip

WORKDIR /home/backend/externo
COPY . .

RUN npm install

# RUN cp .env.development /home/backend/externo/.env

# CMD ["npm", "run", "dev"]

RUN npm run build

RUN cp .env.development /home/backend/externo/build/.env

WORKDIR /home/backend/externo/build

RUN npm ci --production

CMD [ "node", "server.js" ]
