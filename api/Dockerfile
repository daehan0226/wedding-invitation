FROM node:16

WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install -g @nestjs/cli
RUN npm install --legacy-peer-deps
COPY . .

CMD [ "npm", "run", "start:prod" ]
