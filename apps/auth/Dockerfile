# this baseimage is used for development
FROM node:alpine As development

# set working directory
WORKDIR /usr/src/app

# copy package.json and pnpm-lock.yaml to working directory
COPY package.json ./
COPY pnpm-lock.yaml ./

# install pnpm
RUN npm i -g pnpm
RUN pnpm install

# Copy entire app to the root of docker container
COPY . .

# execute nest build command
RUN pnpm run build

# set working directory for production
FROM node:alpine as production

# specify a variable that can be overwritten at build time. Default is production
ARG NODE_ENV=production

# set environment variable
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm
# install only production dependencies
RUN pnpm install --prod

# copy from development stage 
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/auth/main"]
