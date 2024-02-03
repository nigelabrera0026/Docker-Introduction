# Using the official Node.js image as the base image
FROM node:21-alpine3.18

# Create and set the working directory
WORKDIR /abrera_nigel_site

# Copying the package.json and package-lock.json to the workdir
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the entire app to the working directory
COPY . .

# Building the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 8083

# Setting Env port to 7775
# ENV PORT 7775

# Setting Env Hostname to  localhost
# ENV HOSTNAME "127.0.0.1"

# Run
CMD npm run dev -- --host 0.0.0.0

# -- --host 0.0.0.0
# sets the node options to listen
# to the specified host to be accessible
# outside the container