# Use an official Python runtime as a parent image
FROM node:8.6

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY wait-for-postgress.sh /wait-for-postgress.sh
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]

# At the end, set the user to use when running this image
USER node