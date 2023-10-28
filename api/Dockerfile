FROM node:18.17.1

WORKDIR /app/api

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build
CMD ["yarn", "start:prod"]
