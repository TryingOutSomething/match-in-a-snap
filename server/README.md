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
|   +-- db
|   |   +-- models (Schema of db goes here)
|   |   +-- index.js
|   +-- routers (Defines the API routes for the server)
|   |   +-- routes.js
|   +-- services (Handles the business logic of each feature)
|   +-- .env
|   +-- index.js (Main app)
|   +-- package-lock.json
|   +-- package.json
|   +-- server.js (Server setup)
```
