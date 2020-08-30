# Movie-Theatre-System
A movie theatre system's backend built on NodeJs with MYSQL as the database and Postman for API testing.

## Installation and Setup

1) Create a database named `movie_theatre` and inside that a table named `movie_theatre` using the following commands using MYSQL:

- `create database movie_theatre;`
-  `use movie_theatre;`
-  `create table movie_tickets(ticketID INT NOT NULL AUTO_INCREMENT, user_name varchar(60),phone_number VARCHAR(10),movie_name VARCHAR(80),timings datetime,  isExpired bool,PRIMARY KEY(ticketID));`

2) Run `npm install` from terminal within the project directory
3) Finally run `npm start`

Server starts running on `http://localhost:5000/`

## Project Details 

1) Project contains 4 main sub-directories :

- Routes => contains the routes for all the end-points and is called from server.js for every request that the server receives from client.
- Controllers => Every route calls some specific controller where the variables are extracted from the requests and finally the response is returned back to the client.
- Services => This directory contains scripts where every controller is further directed and most of the data processing takes place.
- Db => Finally the Db scripts are callled from services which act as the contact point with the database and all the DB queries (MYSQL) are run here.

2) server.js => Starting point of our entire application
3) connection.js => contains the connection details of the server with the database.
4) Line 21 server.js also contains `cron jobs` which automatically deletes the expired records from the DB after every 8 hours.
5) tests => This directory contains screenshots for the api testing through Postman.

**Note: I have written tests for each end-point which I tested using Postman only. The test conditions and results are visible in the screenshots.**

**Kindly note that while my repo was public on github this user https://github.com/MrRobot2001/Movie-Theatre-System forked my assessment code and might use it as another submission while it has originally been written by me.**

