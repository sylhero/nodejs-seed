# Node image
FROM node:12

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy source code
COPY . /usr/src/app/

# install and cache app dependencies
RUN npm install --only=production

EXPOSE 3000

CMD [ "npm", "run", "prod" ]
