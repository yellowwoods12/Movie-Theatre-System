var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const updateTicketTimeDb = async (ticketId,newTime) => {
 try{
  

     let updateTimepromisify = promisify(connection.query).bind(connection);
    const updated = await updateTimepromisify('UPDATE movie_tickets SET timings =? WHERE ticketID = ?',[newTime,ticketId]);
   

    return {"message": "Successfully Updated Ticket Time"};


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    updateTicketTimeDb
}