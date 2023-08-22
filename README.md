# web architecture follow up

  
  
  

## Prerequisites

 
node.js

docker

  

## Repository Structure

```
├── app # Next.js Application

└── api # Express API

└── db # Postgres db
```
  

## Setup & Running the Project

  

### db

```
cd db

docker build . -t db

docker run -p 5432:5432 db
```


### api (Express API)

```
cd api

npm install

npm start
```

  

### app (nextjs app)

```
cd app

npm install

npm run dev
```

  

## Usage

http://localhost:3000 to view app

  

To interact directly with the API, you can send GET or POST requests to http://localhost:3999/data





