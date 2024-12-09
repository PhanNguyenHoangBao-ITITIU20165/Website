# # build stage
# FROM node:16-alpine as build-stage
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# # production stage
# FROM nginx:1.17-alpine as production-stage
# COPY --from=build-stage /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

FROM node:16

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]