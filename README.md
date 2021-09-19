# go-react

It is a CRUD application built using GO(fiber, gorm), TYPESCRIPT and REACT.

## Installation

Make sure you have Go and PostgreSQL installed.

In order to test the frontend and the server together, it is necessary to run both projects.

Node modules are not in the frontend folder. It is necessary to run the package installer.

```bash
cd backend
go run main.go

cd..

cd frontend
npm i
yarn start
```

## DB Connection

It is used with the Gorm and PostgreSQL libraries. The db connection can be established by updating the information in the database/connection.go file. There should be a table named Test.

## Controllers

All functions including CRUD operations are located in the controller folder.

## Routes

All routes are defined in the routes folder.

## Frontend

Rotos are defined in the Routes.tsx file in the src folder and they work in the app.tsx file. Pages can be changed by making changes in the Pages folder. Also, navbar is defined as navbar component.
