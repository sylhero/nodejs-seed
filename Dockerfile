# Node image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy source code
COPY . /usr/src/app/

# install and cache app dependencies
RUN npm install

# run lint and unit test
RUN npm run test:unit

EXPOSE 3000

CMD [ "npm", "run", "prod" ]
