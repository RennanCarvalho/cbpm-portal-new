FROM node:18-bookworm-slim

WORKDIR /home/frontend/externo
COPY . .

RUN npm install

# CMD [ "npm", "run", "dev" ]

RUN npm run build

CMD [ "npm", "run", "start" ]
