FROM node:20.9-alpine

WORKDIR /app/frontend

EXPOSE 3000
CMD [ "npm", "start" ]

COPY package.json /app/frontend
RUN npm install

COPY . /app/frontend
