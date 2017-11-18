# Use an official Python runtime as a parent image
FROM node:8.6

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY wait-for-postgress.sh /wait-for-postgress.sh
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm config set registry http://registry.npmjs.org/ && npm install

# Bundle app source
COPY . .

RUN rm -f build
RUN mkdir build
RUN chmod 777 /usr/src/app/build
RUN npm run build

EXPOSE 80

# At the end, set the user to use when running this image
USER node