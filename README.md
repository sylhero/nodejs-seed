# Kubernetes Backend

This is a full setup for Nodejs + Koa + Typescript + jest + Nodemon development

## Project Structure

```
+-- src
    |   |   +--User //feature
    |   |   |   +-- __tests__ // unit tests
    |   |   |   +-- Routes.ts
    |   |   |   +-- Controllers.ts
    |   |   |   +-- images
    |   |   +-- Routes.ts //routing file
    |   |   +-- Server.ts // entry for pages
+-- node_modules
+-- package.json
+-- Dockerfile
+-- README.md
+-- dist // generated code
+-- nodemon.json  // nodemon configuration
+-- tsconfig.json  // tsconfig configuration
+-- tslint.json  // tslint configuration
```

## Quick Start

- Under `kubernetes-backend`, do `npm install`
- Enter `npm run dev` and the server should be ready on `localhost:3000`

## Dev Guidelines

### Commands
- `npm run lint` run tslint against src
- `npm run clean` delete auto generated folders like dist reports
- `npm run dev` run dev build
- `npm run prod` run prod build
- `npm run test:unit` run unit tests
- `npm run test:integration` run integration tests

## Style Guide
https://github.com/airbnb/javascript


