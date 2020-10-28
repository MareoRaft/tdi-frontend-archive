# build environment
FROM node:12.19.0 as build
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm install react-scripts@3.4.3 -g
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /home/node/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
