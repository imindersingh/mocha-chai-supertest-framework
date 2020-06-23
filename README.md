# React-Node App

This is a simple react-node app which allows you to POST, PUT, GET and DELETE commands to a database

## Stack
- React (todo)
- Ejs
- Express Node
- Mongo

## Requirements
- Npm
- Mongo
- Docker

## Setup

This app can be installed by the following commands or running in docker

Intall dependencies:

`npm install`

Install mongodb:

`brew tap mongodb/brew`

`brew install mongodb-community@4.2`

Run mongodb (macOS):

`brew services start mongodb-community@4.2`

To verify mondo is running:

`ps aux | grep -v grep | grep mongod`

To start the application: 

`npm run start`

## Docker

To start the application in test:

`npm run test`

To run tests:

`npm run mocha`

To run the application and db in docker:

`docker-compose up`

This will run the app and mongo in two networked containers.

## API

To POST commands:

```
curl --request POST \
  --url http://localhost:8080/commands \
  --header 'content-type: application/json' \
  --data '{"description":"Gauge run specs",
"command":"gauge run specs",
"technology":"gauge"}'
```

to GET all commands:
```
curl --request GET \
  --url http://localhost:8080/commands \
  --header 'content-type: application/json'
```

to GET all commands by technology, i.e. java
```
curl --request GET \
  --url http://localhost:8080/commands?technology=java \
  --header 'content-type: application/json'
```

## TODO
1. Build simple front end using react
2. Add addditional tests
3. Separate app from tests / rename repo

Mocha chai supertest - https://www.codementor.io/@olatundegaruba/integration-testing-supertest-mocha-chai-6zbh6sefz