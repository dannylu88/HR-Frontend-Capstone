FROM node:8

COPY . /HR-Frontend-Capstone
WORKDIR /HR-Frontend-Capstone


RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "node" ]
