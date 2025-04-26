FROM node:23-slim

WORKDIR /app
COPY package*.json .
RUN npm install

ARG MONGO_URL
ENV MONGO_URL=$MONGO_URL

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD [ "npm", "run" ,"deploy" ]