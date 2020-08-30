var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const deleteExpiredTicketsDb = async (currentTime) => {
 try{
  

     let deleteExpirypromisify = promisify(connection.query).bind(connection);
    const checked = await deleteExpirypromisify('DELETE from movie_tickets WHERE isExpired = 1');
   

    return {"message": "Successfully Deleted Expired Tickets"};


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    deleteExpiredTicketsDb
}