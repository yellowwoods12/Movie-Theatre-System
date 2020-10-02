# Movie-Theatre-System
A movie theatre system's backend built on NodeJs with MYSQL as the database and Postman for API testing.

This application is built as part of hiring assignment by Zomentum.

## Task

To create a REST application for movie ticket bookings.

## User side Requirements

 - Book ticket for a movie at a given time slot if slot is available.
 - Update booking timings for provided ticket.
 - Fetch user details via ticket id.
 - Delete ticket via ticket id.
 - Retrieve all tickets at a given time.

## Application side requirements

- For a given slot for a movie upto 20 people can book tickets.
- Tickets should be set expired after 8 hours of booking time.
- Automatically delete expired tickets.

Selected tech stack

-  Backend Service : NodeJS
-  Database: MYSQL


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
4) Line 21 server.js also contains **cron jobs** which automatically deletes the expired records from the DB after every 8 hours.
5) tests => This directory contains screenshots for the api testing through Postman.
6) Postman => This directory contains the Postman collection having all the tests for all the endpoints.

## Routes

1) /api/bookTicket => Used for booking a new ticket wherein user provides his name, phone number, movie, movie timing.
2) /api/updateTicketTime => Used for updating the time slot of some given ticket.
3) /api/viewTickets => Fetch ticket details for a given time slot.
4) /api/deleteTicket => Deleting some particular ticket given its ticketId.
5) /api/viewUser => Viewing user details for some particular ticket.

## Testing 

**The entire collection containing the tests and the variables is present in Postman directory.**




