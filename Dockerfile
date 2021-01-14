FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3000

RUN npm run build
RUN npm run generate

CMD [ "npm", "run", "start" ]
