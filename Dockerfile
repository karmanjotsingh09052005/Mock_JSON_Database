#use the official node.js image
FROM node:18-alpine

#setup the working directory
WORKDIR /

#copy the package.jason contents
COPY package*.json ./

#install the dependencie
RUN npm install

#copy all the source files
COPY . .

#expose our port servive 
EXPOSE 3000

#start the application
CMD ["node", "app.js"]