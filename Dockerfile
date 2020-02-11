FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm install --no-optional
COPY . .
EXPOSE 8080
RUN npm install -g nodemon
CMD [ "nodemon", "server.js" ]