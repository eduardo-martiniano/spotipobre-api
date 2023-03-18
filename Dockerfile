FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER root

RUN npm install
COPY --chown=node:node . .
CMD [ "node", "app.js" ]