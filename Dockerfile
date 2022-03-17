FROM node:lts-alpine3.15

RUN mkdir -p /app/node_modules/ && chown -R node:node /app 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3006

CMD ["node", "server.js"] 
