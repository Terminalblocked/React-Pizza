FROM node:alpine
WORKDIR /react-pizza
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE  4173
CMD ["npm", "run", "preview"]
