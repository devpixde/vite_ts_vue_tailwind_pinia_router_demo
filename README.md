# Vue 3 + Typescript + Tailwind + Vite + Pinia + Router - Demo

## About The Project

This is a project with examples to learn and show how to implement features in above mentioned technologies.

##  Built With
* Vite
* Vue 3
* Typescript
* Tailwind
* Pinia
* Vue-Router (4)
* Docker


## Getting Started

### Prerequisites

Have either node.js (16) with yarn or Docker installed

### Installation

#### With Local Node.js (16)

* Clone project
* yarn install


#### With Docker

In case you have docker installed you do not need to have nodejs installed on your mashine to start developing.

* Clone project
* cd into projects folder
* Create interactive container 

Mac:
```shell
docker run --name vite-vue-tailwind-pinia-router-demo-container -it -v "${PWD}:/app" -w "/app" -p 3000:3000 vite-vue-tailwind-pinia-router-demo-image
```

Windows:
```shell
docker run --name vite-vue-tailwind-pinia-router-demo-container -it -v "%cd%:/app" -w "/app" -p 3000:3000 vite-vue-tailwind-pinia-router-demo-image
```

* Interact with the container in the same way as on your local mashine:

Develop:
```shell
npm run dev
```

Build production version:
```shell
npm run build
```

```shell
docker stop vite-vue-tailwind-pinia-router-demo-container 
```

```shell
docker start vite-vue-tailwind-pinia-router-demo-container 
```

```shell
docker exec -it vite-vue-tailwind-pinia-router-demo-container  "/bin/bash"
```

```shell
docker exec -it vite-vue-tailwind-pinia-router-demo-container  "/bin/bash"
```

If you need more packages
```shell
yarn add <my-package
```
