FROM node:alpine

WORKDIR /usr/src/

EXPOSE 3000

COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
