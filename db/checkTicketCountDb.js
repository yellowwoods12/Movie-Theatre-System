var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const checkTicketCountDb = async (timings) => {
 try{
  

     let checkCountpromisify = promisify(connection.query).bind(connection);
    const count = await checkCountpromisify('Select count(`timings`) as count from movie_tickets where timings = ?',[timings]);

    countstr = JSON.stringify(count);
    countjson = JSON.parse(countstr);

    return countjson[0].count;


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    checkTicketCountDb
}