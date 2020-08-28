var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const bookTicketDb = async (userName, phoneNumber, movieName, timings) => {
 try{
  
    var ticketDetails = {
        "user_name": userName,
        "phone_number" : phoneNumber,
        "movie_name": movieName,
        "timings" : timings,
         "isExpired" : false
    }

     let bookTicketpromisify = promisify(connection.query).bind(connection);
    const result = await bookTicketpromisify('INSERT INTO movie_tickets SET ?',[ticketDetails]);
    return result;


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    bookTicketDb
}