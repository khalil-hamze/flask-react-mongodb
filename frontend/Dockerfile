FROM node:14.17.6

EXPOSE 3000
EXPOSE 35729

WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm install react-scripts -g

COPY . .

CMD ["npm", "start"]