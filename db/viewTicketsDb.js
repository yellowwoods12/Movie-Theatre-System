var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const viewTicketsDb = async (timings) => {
 try{
  

    let ticketpromisify = promisify(connection.query).bind(connection);
    const ticketDetails = await ticketpromisify('Select * from movie_tickets where timings = ?',[timings]);

    ticketDetailstr = JSON.stringify(ticketDetails);
    ticketDetailsjson = JSON.parse(ticketDetailstr);

    return ticketDetailsjson;


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    viewTicketsDb
}