FROM node:8

COPY . /FEC-Danny-L
WORKDIR /FEC-Danny-L


RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "node" ]
