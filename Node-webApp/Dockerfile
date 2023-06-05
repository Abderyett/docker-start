#Specify Base Image

FROM node:alpine


#Install some dependecies
WORKDIR /usr/app
COPY ./ ./
RUN npm install


#Default command
CMD ["npm","start"]