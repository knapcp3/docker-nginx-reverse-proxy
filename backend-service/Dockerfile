FROM node:10.15.3-alpine

WORKDIR /app
COPY . ./
RUN npm i
EXPOSE 3000

CMD ["node", "index.js"]