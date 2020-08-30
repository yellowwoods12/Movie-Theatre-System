var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const getTicketIdDb = async (phoneNumber,timings) => {
 try{
  

     let getIdpromisify = promisify(connection.query).bind(connection);
    const ticketId = await getIdpromisify('Select ticketID from movie_tickets where phone_number = ? AND timings = ?',[phoneNumber, timings]);

    idstr = JSON.stringify(ticketId);
    ticketIdjson = JSON.parse(idstr);

    return ticketIdjson[0].ticketID;


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    getTicketIdDb
}