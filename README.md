# Nodejs Seed

This is a full setup for Nodejs + Hapi + Typescript + jest + Nodemon development

## Project Structure

```
+-- src
    |   |   +--User //feature
    |   |   |   +-- __tests__ // unit tests
    |   |   |   +-- Routes.ts
    |   |   |   +-- Handlers.ts
    |   |   +-- AppPlugins.ts //App modules
    |   |   +-- ServerPlugins.ts //Server modules
    |   |   +-- Server.ts // entry for the backend
+-- node_modules
+-- package.json
+-- Dockerfile
+-- README.md
+-- nodemon.json  // nodemon configuration
+-- tsconfig.json  // tsconfig configuration
+-- tslint.json  // tslint configuration
```

## Quick Start

- Under `nodejs-seed`, do `npm install`
- Enter `npm run dev` and the server should be ready on `localhost:3000`

## Dev Guidelines

### Commands
- `npm run lint` run tslint against src
- `npm run clean` delete auto generated folders like dist reports
- `npm run dev` run dev build
- `npm run prod` run prod build
- `npm run test:unit` run unit tests

## Style Guide
https://github.com/airbnb/javascript


