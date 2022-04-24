FROM node

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

EXPOSE 3001 

CMD [ "node", "server.js" ]