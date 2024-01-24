# React, Typescript, and Vite inside Docker

This is a step by step process on how to create a web application using react, typescript, and vite. Including the steps to create, build, and run the containerized application in a specific port of your localhost, so you could access it in you local machine.

## Creating a new react app with Vite

We will first create a React application with Vite

- Create a folder where you want your project to be placed.
- Open your bash terminal and paste this command.

```bash
npm create vite@latest project_name -- --template react-ts
```
- Replace {project_name} with the desired project name

- Go inside the project directory and install npm
```bash
cd project_name
npm install
```

- If you would like to run the application, you need to be inside the project directory.
```bash
npm run dev
```

## Creating a Dockerfile

- Open the newly created react app in your desired IDE.
- Create a Dockerfile on the root directory of the project and paste the code below.

```docker
# Using the official Node.js image as the base image
FROM node:21-alpine3.18

# Set the working directory
WORKDIR /abrera_nigel_site

# Copying the package.json and package-lock.json to the workdir
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the entire app to the working directory
COPY . .

# Building the app
RUN npm run build

# Expose the port the app will run on
EXPOSE 7775

# Run the app using CMD
CMD npm run dev -- --host 0.0.0.0
# sets the node options to listen
# to the specified host and making it accessible
# outside the container
```

## Dockerfile information

Here is a list of information about each line in the Dockerfile.

- We will be using the node image with 21-alpine3.18 version.

- We set the working directory to abrera_nigel_site.

- Then we will copy all the package.json files and package-lock.json.

- Now we will be building the react app using npm run build.

- We will be exposing the port 7775 to give external accessibility outside the container.

- The last line would be executing npm run dev to start the application inside the docker.


## Build and Run the app inside Docker


Now we will build and run the application inside docker, and accessing it in our localhost.
We will be doing this inside bash terminal.


First make sure you're in your project directory and have docker installed.
To know how to install docker in bash, click [here](https://docs.docker.com/engine/install/ubuntu/)

- To build the docker image we need to use docker build.
```bash
sudo docker build -t abrera_nigel_coding_assignment11 .
```

The -t is used to specify a name and optionally a tag.

We gave the Docker image the `abrera_nigel_coding_assignemnt11`
and the ` . ` means the path of the project we're going to build.


- To run the Docker image that was recently created, we will use Docker run. We will also map the port to the localhost using `-p` to access the app.

```bash
sudo docker run -p 7775:5173 abrera_nigel_coding_assignment11
```

The `7775` is the port to our localhost so we could access it.

The `5173` is the port inside docker where the app is connected.

The last part is the image name.

Now you can access it in your `localhost:7775`.

## Additional information for Docker

- To list all the containers that you have.
```bash
sudo docker container ls -a
```

- To list all the images that you have.
```bash
sudo docker image ls -a
```

- To delete a docker container.
```bash
sudo docker rm (container_id)
```
Notes:
    You can check the container id by listing all the containers that you have.
    You can only delete a container if it's not running.

- To delete a docker image.
```bash
sudo docker rmi (image_id)
```
Notes:
    You can only delete an image if the image is not being used by a container.
    Delete the container first before the image.
    You can see the image id by listing all the images that you have.

# React + TypeScript + Vite + Docker
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
