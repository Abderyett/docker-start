#Specify Base Image

FROM node:alpine


#Install some dependecies
WORKDIR /usr/app
# we added package.json to copy command to tell copy the only that I want to copy is the package.json
# and this avoid to run npm install in rebuild
COPY ./package.json ./ 
RUN npm install


#Default command
CMD ["npm","start"]