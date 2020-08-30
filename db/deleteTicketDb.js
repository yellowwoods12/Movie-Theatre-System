var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const deleteTicketDb = async (ticketId) => {
 try{
  

     let deleteTicketpromisify = promisify(connection.query).bind(connection);
    const deleted = await deleteTicketpromisify('DELETE from movie_tickets WHERE ticketID = ?',[ticketId]);
   
    
    return {"message": "Successfully Deleted the Ticket with Id "+ticketId};


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    deleteTicketDb
}