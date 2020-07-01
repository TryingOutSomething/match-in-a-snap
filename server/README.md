# Instructions

#### Install dependencies:

```
npm install
```

#### Create a .env file or use the sample provided (.env_sample). A snippet of the file content:

```
MONGO_URI=<PASTE CREDENTIALS HERE>
```

##### It shall contain all credentials needed for this project

#### To start the server:

```
npm run dev
```

#### File Structure:

```
server
|   +-- configs (Contains all configurations for the projects)
|   |   +-- database-configs.js
|   |   +-- server-configs.js
|   +-- controllers (Controls the business logic of routes defined)
|   |   +-- restaurant-locator.js
|   +-- db
|   |   +-- models (Schema of db goes here)
|   |   |   +-- restaurants.js
|   |   +-- index.js
|   +-- mappers (Controls the data to be returned back to the client)
|   |   +-- restaurant-mapper.js
|   +-- middlewares (Validate and process requests from the client)
|   |   +-- request-validation.js
|   +-- routers (Defines the API routes for the server)
|   |   +-- routes.js
|   +-- services (Handles the business logic of each feature in Controllers)
|   |   +-- api.js
|   |   +-- restaurant.js
|   +-- .env
|   +-- index.js (Main app)
|   +-- package-lock.json
|   +-- package.json
|   +-- server.js (Server setup)
```
