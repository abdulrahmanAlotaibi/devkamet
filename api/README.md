# Devkamet API 

## all the enviroment setup is stored inside the folder config
- `config/development.json` => to setup the **development** environment variables
- `config/staging.json` => to setup the **stage** enviroment variables
- `config/production.json` => to setup the **production** environment variables

### For example : modify the following key-value pairs inside `config/development.json`  with your credentials
```json
{
  "API_RATE_LIMIT": 160,
  "DATABASE_URI": "<Your MongoDB URI>",
  "databasePassword": "<Put here your MongoDB password>",
  "JWT_SECRET": "<Your JWT secret>",
  "email": {
    "host": "Email host email>",
    "port": 2525,
    "user": "",
    "password": ""
  },
  "AWS": {
    "key": "<Your AWS key>",
    "secret": "<Your AWS Secret>",
    "region": "<Prefered region (For ex: us-east-2)>",
    "bucket": {
      "name": "<Your bocket name>"
    }
  }
}
```

## How to run the API(app server) 🚀
```bash
yarn
yarn dev
```
Or using **npm** package manager:

```bash
npm i
npm run dev
```

## Design Patterns

- `server.ts` : contains just to boot the app server (app.ts)
- `app.ts` : The main entry of the Application server
- `routes`: All the routes is stored in this folder
- `middlewares` : middleware is a nodejs concept, here we are storing re-usable middleware that manipulates request & responses
- `nodemon.json` : config file for nodemon runner
- `models` : Database Schemas (Entities)
- `services`: Doing the business logic or the core functionality, the only layer that interacts with the `models` layer
- `controllers` : handling the requests and responses, the only layer that interacts with the service layer
- `scripts` : In the future we may automate some functionalities in bash scripts
-` config` : contains all the configuration of the server and other third-party services such as MongoDB, AWS S3
