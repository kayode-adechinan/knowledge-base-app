
FROM node:14

# Install Node.js
RUN apt-get update
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Set work directory
WORKDIR /code


COPY package*.json ./

RUN npm install


RUN npm install -g nodemon

COPY . .
